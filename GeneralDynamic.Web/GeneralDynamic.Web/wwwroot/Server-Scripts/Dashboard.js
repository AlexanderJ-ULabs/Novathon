$(document).ready(function () {
    LoadWeeklyChart('.GM-Chart2',[1,2,4,5,6,8,7],'Some chart');

    LoadWeeklyChart('.GM-Chart1', [1, 2, 4, 5, 6, 8, 7], 'Some chart');









  
});


function LoadWeeklyChart(selector,data,type) {
    /*  **************** Coloured Rounded Line Chart - Line Chart ******************** */
  var chart=  $(selector).highcharts({
        credits: {
            enabled: false
        },
        chart: {
            type: 'column',         
                    
        },
        title: {
            text: ''
        },
      xAxis: {
          reversed: false,
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        yAxis: {
            title: {
                text: ''
            }            
        },        
        tooltip: {
            valueSuffix: type
        },
        series: [           
            {
               name: type,
                data: data
            }
        ]
    });
   
}