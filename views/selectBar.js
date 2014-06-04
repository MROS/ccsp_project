var village_input_bar = $('#village-input-bar');

var selectedVillage = [];

var alertbox = function(words)
{
	return $('<div class="alert alert-warning alert-dismissable" style="width: 200px"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + words + '</div>');
}

village_input_bar.find('button').click(function(){
	var text = village_input_bar.find('input').val();
	if(isValidVillage(text))
	{
		addVillageData(text);
		village_input_bar.find('input').val("");
	}
	else
	{
		village_input_bar.append(alertbox('沒有這個里。'));
	}

});

setRemoveBtn();

var allDivision = 
{
	"北投區" : [ '湖田里',  '大屯里',  '一德里',  '八仙里',  '大同里',  '中心里',  '中央里',  '中和里',  '中庸里',  '文化里',  '文林里',  '永和里',  '永明里',  '永欣里',  '石牌里',  '立農里',  '立賢里',  '湖山里',  '溫泉里',  '榮光里',  '福興里',  '豐年里',  '吉利里',  '吉慶里',  '秀山里',  '奇岩里',  '東華里',  '林泉里',  '長安里',  '建民里',  '泉源里',  '洲美里',  '振華里',  '桃源里',  '清江里',  '尊賢里',  '智仁里',  '開明里',  '裕民里',  '榮華里',  '稻香里',  '關渡里' ],
	"大安區" : [ '大學里',  '敦煌里',  '仁慈里',  '華聲里',  '仁愛里',  '新龍里',  '古風里',  '義安里',  '古莊里',  '義村里',  '正聲里',  '群英里',  '民炤里',  '群賢里',  '民輝里',  '誠安里',  '永康里',  '臨江里',  '光明里',  '福住里',  '光武里',  '德安里',  '光信里',  '黎元里',  '全安里',  '黎孝里',  '住安里',  '黎和里',  '車層里',  '錦安里',  '和安里',  '錦泰里',  '昌隆里',  '錦華里',  '法治里',  '龍生里',  '臥龍里',  '龍安里',  '芳和里',  '龍坡里',  '虎嘯里',  '龍門里',  '學府里',  '龍泉里',  '建安里',  '龍陣里',  '建倫里',  '龍淵里',  '通化里',  '龍雲里',  '通安里',  '龍圖里',  '敦安里' ],
	"大同區" : [ '大有里',  '雙連里',  '民權里',  '永樂里',  '玉泉里',  '光能里',  '老師里',  '至聖里',  '延平里',  '保安里',  '南芳里',  '建功里',  '建明里',  '建泰里',  '星明里',  '重慶里',  '國順里',  '國慶里',  '揚雅里',  '斯文里',  '景星里',  '朝陽里',  '隆和里',  '蓬萊里',  '鄰江里' ],
	"南港區" : [ '仁福里',  '九如里',  '東明里',  '三重里',  '東新里',  '中南里',  '南港里',  '中研里',  '新光里',  '玉成里',  '新富里',  '合成里',  '萬福里',  '成福里',  '聯成里',  '百福里',  '鴻福里',  '西新里',  '舊莊里',  '重陽里' ],
	"內湖區" : [ '麗山里',  '蘆洲里',  '明湖里',  '康寧里',  '金湖里',  '安泰里',  '安湖里',  '秀湖里',  '大湖里',  '五分里',  '內湖里',  '內溝里',  '石潭里',  '行善里',  '西安里',  '西康里',  '西湖里',  '東湖里',  '金瑞里',  '金龍里',  '清白里',  '港都里',  '港富里',  '港華里',  '港墘里',  '湖元里',  '湖興里',  '湖濱里',  '紫星里',  '紫陽里',  '紫雲里',  '週美里',  '瑞光里',  '瑞陽里',  '葫洲里',  '碧山里',  '樂康里',  '寶湖里',  '南湖里' ],
	"士林區" : [ '臨溪里',  '永福里',  '公館里',  '新安里',  '陽明里',  '菁山里',  '平等里',  '溪山里',  '翠山里',  '三玉里',  '天福里',  '天祿里',  '天壽里',  '天和里',  '天山里',  '天玉里',  '天母里',  '岩山里',  '名山里',  '聖山里',  '芝山里',  '東山里',  '德行里',  '德華里',  '忠誠里',  '蘭雅里',  '蘭興里',  '仁勇里',  '義信里',  '福林里',  '福德里',  '福志里',  '舊佳里',  '福佳里',  '後港里',  '福中里',  '前港里',  '百齡里',  '承德里',  '福華里',  '明勝里',  '福順里',  '富光里',  '葫蘆里',  '葫東里',  '社子里',  '社新里',  '社園里',  '永倫里',  '福安里',  '富洲里' ],
	"松山區" : [ '莊敬里',  '三民里',  '富泰里',  '中正里',  '富錦里',  '中崙里',  '復建里',  '中華里',  '復盛里',  '介壽里',  '復勢里',  '民有里',  '復源里',  '民福里',  '敦化里',  '吉仁里',  '慈祐里',  '吉祥里',  '新東里',  '安平里',  '新益里',  '自強里',  '新聚里',  '東光里',  '福成里',  '東昌里',  '精忠里',  '東勢里',  '龍田里',  '東榮里',  '鵬程里',  '松基里',  '美仁里' ],
	"萬華區" : [ '日祥里',  '日善里',  '全德里',  '孝德里',  '和平里',  '和德里',  '忠貞里',  '忠德里',  '保德里',  '凌霄里',  '頂碩里',  '華中里',  '新安里',  '新和里',  '新忠里',  '壽德里',  '榮德里',  '銘德里',  '興德里',  '錦德里',  '雙園里',  '騰雲里',  '仁德里',  '新起里',  '西門里',  '萬壽里',  '青山里',  '福星里',  '柳鄉里',  '福音里',  '富民里',  '綠堤里',  '富福里',  '糖部里',  '華江里',  '菜園里' ],
	"文山區" : [ '忠順里',  '萬美里',  '景行里',  '景東里',  '景美里',  '景慶里',  '景仁里',  '景華里',  '萬有里',  '萬祥里',  '萬隆里',  '萬年里',  '萬和里',  '萬盛里',  '興豐里',  '興光里',  '興家里',  '興得里',  '興業里',  '興安里',  '興福里',  '興旺里',  '興泰里',  '興昌里',  '試院里',  '華興里',  '明義里',  '明興里',  '木柵里',  '木新里',  '順興里',  '樟林里',  '樟新里',  '樟腳里',  '萬芳里',  '博嘉里',  '萬興里',  '指南里',  '老泉里' ],
	"信義區" : [ '三張里',  '三犁里',  '大仁里',  '大道里',  '中行里',  '中坡里',  '中興里',  '五全里',  '五常里',  '六合里',  '六藝里',  '四育里',  '四維里',  '正和里',  '永吉里',  '永春里',  '安康里',  '西村里',  '松友里',  '松光里',  '松隆里',  '長春里',  '泰和里',  '國業里',  '富台里',  '惠安里',  '敦厚里',  '景勤里',  '景新里',  '景聯里',  '雅祥里',  '新仁里',  '嘉興里',  '廣居里',  '黎平里',  '黎安里',  '黎忠里',  '黎順里',  '興隆里',  '興雅里',  '雙和里' ],
	"中山區" : [ '北安里',  '金泰里',  '力行里',  '下埤里',  '大佳里',  '大直里',  '中山里',  '中央里',  '中吉里',  '中原里',  '中庄里',  '正守里',  '正得里',  '正義里',  '民安里',  '永安里',  '成功里',  '朱崙里',  '朱園里',  '朱馥里',  '江山里',  '江寧里',  '行仁里',  '行孝里',  '行政里',  '松江里',  '恆安里',  '埤頭里',  '康樂里',  '復華里',  '晴光里',  '集英里',  '圓山里',  '新生里',  '新喜里',  '新福里',  '新庄里',  '聚盛里',  '聚葉里',  '劍潭里',  '興亞里',  '龍洲里' ],
	"中正區" : [ '三愛里',  '文北里',  '文盛里',  '文祥里',  '水源里',  '永功里',  '永昌里',  '光復里',  '幸市里',  '幸福里',  '忠勤里',  '東門里',  '林興里',  '板溪里',  '河堤里',  '南門里',  '南福里',  '建國里',  '梅花里',  '頂東里',  '富水里',  '廈安里',  '愛國里',  '新營里',  '網溪里',  '黎明里',  '螢圃里',  '螢雪里',  '龍光里',  '龍福里',  '龍興里' ]
};


$('#division-bar').find('button').click(function(){
	$('#division-bar').find('button').removeClass('active');
	$(this).addClass('active');
	var division = allDivision[$(this).text()];
	var btnGroup = $('#village-bar .btn-group');
	btnGroup.find('button').remove();
	for (var i=0; i<division.length; i++)
	{
		btnGroup.append('<button type="button" class="btn btn-primary btn-sm">' + division[i] + '</button>');
	}

	var sv = selectedVillage.slice(0);
	btnGroup.find('button').each(function(){
		if(sv.indexOf($(this).text())!=-1)
		{
			$(this).addClass('active');
		}
	});

	btnGroup.find('button').click(function()
	{
		if (!($(this).hasClass('active')))
		{
			addVillageData($(this).text());
			$(this).toggleClass('active');
		}
		else
		{
			removeVillageData($(this).text());
			$(this).toggleClass('active');
		}
	});
});


function addVillageData(village){

	 $.getJSON('http://localhost:3000/villa?'+village,{},function(data, status){
	      console.log(data);
	    });
	//dataArray = getData(village)    blablabla.....
	var dataArray = [54000, 1000, 95000, 105000, 10000, 0, 0, 0, 0, 35200, 0, 0, 0];
	// for (var i=0; i<=12; i++)
	// {
	// 	dataArray.push(5*Math.random());
	// }

	var myChart = $('#container').highcharts();
	selectedVillage.push(village);
	myChart.xAxis[0].setCategories(selectedVillage);
	for (var i=0; i<13; i++)
	{
		myChart.series[i].addPoint(dataArray[i],false);
	}
	// console.log(myChart.series[0].data[myChart.series[0].data.length-1].category,myChart.series[0].data[myChart.series[0].data.length-1]);
	myChart.redraw();
	setRemoveBtn();

}

function isValidVillage(village){
	for (var d in allDivision) {
		if(allDivision[d].indexOf(village)!=-1)
		{
			return true;
		}
	};
	console.log(village + ' is not a valid village');

	return false;
}

function setRemoveBtn(){

	$('.highcharts-axis-labels.highcharts-xaxis-labels').find('text').click(function(){
		console.log('remove', $(this).text());
		var v = $(this).text();
		// $(this).text('removing...');
		removeVillageData(v);
	});
	$('.highcharts-axis-labels.highcharts-xaxis-labels').find('text').hover(function(){
		// console.log('focus in');
		$(this).css('fill', 'rgba(255, 104, 104, 1)');
	}, function(){
		// console.log('focus out');
		$(this).css('fill', '#E0E0E3');
	});
}

function removeVillageData(village){
	var myChart = $('#container').highcharts();
	
	var newV = [];
	var si = -1;
	for (var i = 0; i < selectedVillage.length; i++) {
		if (selectedVillage[i]!=village)
			newV.push(selectedVillage[i]);
		else si = i;
	};
	if (si==-1)
	{
		console.log('Can\'t remove the village. Because the village is not in the graph.');
		return;
	}
	selectedVillage = newV;
	myChart.xAxis[0].setCategories(selectedVillage);

	for (var j = 0; j < 13; j++) {
		var Series = myChart.series[j];
		var Data = (myChart.series[j].yData).slice(0);
		Data.splice(si,1);

		Series.setData([],false);

		for (var i = 0; i < Data.length; i++) {
			Series.addPoint(Data[i],false);
		};

	}
	myChart.redraw();

	setRemoveBtn();
}