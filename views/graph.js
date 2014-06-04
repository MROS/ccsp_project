// var fs = require('fs');
var myGraph = $('#container');

/**
 * Dark theme for Highcharts JS
 * @author Torstein Honsi
 */
// Load the fonts
Highcharts.createElement('link', {
   href: 'http://fonts.googleapis.com/css?family=Unica+One',
   rel: 'stylesheet',
   type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);
Highcharts.theme = {
   colors: ["#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
   chart: {
      backgroundColor: {
         linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
         stops: [
            [0, '#2a2a2b'],
            [1, '#3e3e40']
         ]
      },
      style: {
         fontFamily: "'Unica One', sans-serif"
      },
      plotBorderColor: '#606063'
   },
   title: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase',
         fontSize: '20px'
      }
   },
   subtitle: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase'
      }
   },
   xAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      title: {
         style: {
            color: '#A0A0A3'

         }
      }
   },
   yAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      tickWidth: 1,
      title: {
         style: {
            color: '#A0A0A3'
         }
      }
   },
   tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
         color: '#F0F0F0'
      }
   },
   plotOptions: {
      series: {
         dataLabels: {
            color: '#B0B0B3'
         },
         marker: {
            lineColor: '#333'
         }
      },
      boxplot: {
         fillColor: '#505053'
      },
      candlestick: {
         lineColor: 'white'
      },
      errorbar: {
         color: 'white'
      }
   },
   legend: {
      itemStyle: {
         color: '#E0E0E3'
      },
      itemHoverStyle: {
         color: '#FFF'
      },
      itemHiddenStyle: {
         color: '#606063'
      }
   },
   credits: {
      style: {
         color: '#666'
      }
   },
   labels: {
      style: {
         color: '#707073'
      }
   },

   drilldown: {
      activeAxisLabelStyle: {
         color: '#F0F0F3'
      },
      activeDataLabelStyle: {
         color: '#F0F0F3'
      }
   },

   navigation: {
      buttonOptions: {
         symbolStroke: '#DDDDDD',
         theme: {
            fill: '#505053'
         }
      }
   },

   // scroll charts
   rangeSelector: {
      buttonTheme: {
         fill: '#505053',
         stroke: '#000000',
         style: {
            color: '#CCC'
         },
         states: {
            hover: {
               fill: '#707073',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            },
            select: {
               fill: '#000003',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            }
         }
      },
      inputBoxBorderColor: '#505053',
      inputStyle: {
         backgroundColor: '#333',
         color: 'silver'
      },
      labelStyle: {
         color: 'silver'
      }
   },

   navigator: {
      handles: {
         backgroundColor: '#666',
         borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(255,255,255,0.1)',
      series: {
         color: '#7798BF',
         lineColor: '#A6C7ED'
      },
      xAxis: {
         gridLineColor: '#505053'
      }
   },

   scrollbar: {
      barBackgroundColor: '#808083',
      barBorderColor: '#808083',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: '#606063',
      buttonBorderColor: '#606063',
      rifleColor: '#FFF',
      trackBackgroundColor: '#404043',
      trackBorderColor: '#404043'
   },

   // special colors for some of the
   legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
   background2: '#505053',
   dataLabelsColor: '#B0B0B3',
   textColor: '#C0C0C0',
   contrastTextColor: '#F0F0F3',
   maskColor: 'rgba(255,255,255,0.3)'
};
// Apply the theme
Highcharts.setOptions(Highcharts.theme);




var villages = [];
var serieName = ["防火巷之整頓清理","其他里內公共區域認養之必要支出","守望相助工作","鄰里公園之清潔維護","活動中心里民活動場所各項設施之購置及維修 里民活動場所公共意外責任險 里民活動場所辦理活動補助水電費","里內巷弄簡易照明設施修","巷道或水溝之維修","里鄰資訊電腦化相關設備之設置升級維修零件耗材及電腦網路月租費等","里辦公處辦公機具之購置或租用","為民服務設施之購置、租用及維修","里內防疫保健防災救災器材之購置(或租用)及其他小型零星工程或公共設施","辦理節慶公益環保等相關活動","志工相關費用"];
var data = {
        title: {
            text: '各里2013年經費運用圖'
        },
        xAxis: {
            categories: villages
        },
        yAxis: {
            title: {
                text: '元'
            }
        },
        series: [{
            type: 'column',
            name: serieName[0],
            data: []
        },
        {
            type: 'column',
            name: serieName[1],
            data: []
        },
        {
            type: 'column',
            name: serieName[2],
            data: []
        },
        {
            type: 'column',
            name: serieName[3],
            data: []
        },
        {
            type: 'column',
            name: serieName[4],
            data: []
        },
        {
            type: 'column',
            name: serieName[5],
            data: []
        },
        {
            type: 'column',
            name: serieName[6],
            data: []
        },
        {
            type: 'column',
            name: serieName[7],
            data: []
        },
        {
            type: 'column',
            name: serieName[8],
            data: []
        },
        {
            type: 'column',
            name: serieName[9],
            data: []
        },
        {
            type: 'column',
            name: serieName[10],
            data: []
        },
        {
            type: 'column',
            name: serieName[11],
            data: []
        },
        {
            type: 'column',
            name: serieName[12],
            data: []
        }
        ]
    }



//graph init
myGraph.highcharts(data);
// setRemoveBtn();








// function removeVillageData(village){
	
// }


