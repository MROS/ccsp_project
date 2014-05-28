var selectBar = $('#selectBar');
var inputVillageGroup = $('#inputVillageGroup');

inputVillageGroup.find('button').click(function(){
	console.log("press button");
	var text = inputVillageGroup.find('input').val();
	console.log('text =', text);
});
