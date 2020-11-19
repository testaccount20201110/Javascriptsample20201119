$(function(){
    var setArea = $('#loadarea');

    //男女
    var gender = [0,0]; //[0]：男性、[1]：女性

    //役職
    var position = [0,0,0,0]; //[0]：課長、[1]：課長代理、[2]：主査、[3]：主任

    var now   = new Date();       
    var year  = now.getFullYear();

    //年代
    var ageAll = [0,0,0,0]; //[0]：20代、[1]：30代、[2]：40代、[3]：50代

    //WEB
    var ageWeb = [0,0,0,0]; //[0]：20代、[1]：30代、[2]：40代、[3]：50代

    //SMT
    var ageSmt = [0,0,0,0]; //[0]：20代、[1]：30代、[2]：40代、[3]：50代

    //ITI
    var ageIti = [0,0,0,0]; //[0]：20代、[1]：30代、[2]：40代、[3]：50代

    //入社日
    var hiredayArry = [];

    //データ生成
    $.ajax({
        url: 'dist/js/include.json',
        dataType: 'json',
        success : function(data){
            var dataLengh = data.length;

            for (var i=0; i<dataLengh; i++) {
              if(data[i].gender == "男"){
                gender[0]++;
              } else {
                gender[1]++;
              }

              if(data[i].position == "課長"){
                position[0]++;
              } else if(data[i].position == "課長代理") {
                position[1]++;
              } else if(data[i].position == "主査") {
                position[2]++;
              } else if(data[i].position == "主任") {
                position[3]++;
              }

              var bArr = data[i].birthday.split('/');

              if(year - bArr[0] < 30 ){
                ageAll[0]++;
                if(data[i].division == "WEB"){
                  ageWeb[0]++;
                } else if(data[i].division == "SMT"){
                  ageSmt[0]++;
                } else if(data[i].division == "ITI"){
                  ageIti[0]++;
                }
                
              } else if(year - bArr[0] < 40 ) {
                ageAll[1]++;
                if(data[i].division == "WEB"){
                  ageWeb[1]++;
                } else if(data[i].division == "SMT"){
                  ageSmt[1]++;
                } else if(data[i].division == "ITI"){
                  ageIti[1]++;
                }
              } else if(year - bArr[0] < 50 ) {
                ageAll[2]++;
                if(data[i].division == "WEB"){
                  ageWeb[2]++;
                } else if(data[i].division == "SMT"){
                  ageSmt[2]++;
                } else if(data[i].division == "ITI"){
                  ageIti[2]++;
                }
              } else if(year - bArr[0] < 60 ) {
                ageAll[3]++;
                if(data[i].division == "WEB"){
                  ageWeb[3]++;
                } else if(data[i].division == "SMT"){
                  ageSmt[3]++;
                } else if(data[i].division == "ITI"){
                  ageIti[3]++;
                }
              }

              hiredayArry.push(data[i].hireday);

            }

            //男女比
            var mydata = {
              labels: ["男性", "女性"],
              datasets: [
                {
                  label: '人数',
                  backgroundColor: [
                    "#0168b7",
                    "#e70012"
                  ],
                  data: [gender[0], gender[1]],
                }
              ]
            };
            var options = {
              maintainAspectRatio: false,
              title: {    
                display: true,
                text: '男女比'
              },
              legend: {
                display: false
            }
            };
            var canvas = document.getElementById('stage');
            var chart = new Chart(canvas, {
              type: 'pie',
              data: mydata,
              options: options

            });

            //役職者比
            var mydata2 = {
              labels: ["課長", "課長代理", "主査", "主任"],
              datasets: [
                {
                  label: '数量',
                  backgroundColor: [
                    "#009688",
                    "#80CBC4",
                    "#FDD835",
                    "#4DD0E1"
                  ],
                  data: [position[0], position[1], position[2], position[3]],
                }
              ]
            };
            var options2 = {
              maintainAspectRatio: false,
              title: {    
                display: true,
                text: '役職者比'
              },
              legend: {
                display: false
            }
            };
            var canvas2 = document.getElementById('stage2');
            var chart2 = new Chart(canvas2, {
              type: 'pie',
              data: mydata2,
              options: options2
            });

            //年代別
            var mydata3 = {
              labels: ["20代", "30代", "40代", "50代"],
              datasets: [
                {
                  label: '人数',
                  backgroundColor: [
                    '#673AB7',
                    '#9575CD',
                    '#2196F3',
                    '#2196F3'
                  ],
                  data: [ageAll[0], ageAll[1], ageAll[2], ageAll[3]],
                }
              ]
            };
            var options3 = {
              maintainAspectRatio: false,
              title: {    
                display: true,
                text: '年代別'
              },
              scales: {
                yAxes: [{
                  ticks: {
                          max: 10
                  }
                }]
              },
              legend: {
                display: false
            }
            };
            var canvas3 = document.getElementById('stage3');
            var chart3 = new Chart(canvas3, {

              type: 'bar',
              data: mydata3,
              options: options3

            });

            //部署ごとの年代別
            var mydata4 = {
              labels: ["20代", "30代", "40代", "50代"],
              datasets: [
                {
                  label: 'WEB',
                  backgroundColor: [
                    '#2196F3',
                    '#2196F3',
                    '#2196F3',
                    '#2196F3'
                  ],
                  data: [ageWeb[0], ageWeb[1], ageWeb[2], ageWeb[3]],
                },
                {
                  label: 'SMT',
                  backgroundColor: [
                    '#4CAF50',
                    '#4CAF50',
                    '#4CAF50',
                    '#4CAF50'
                  ],
                  data: [ageSmt[0], ageSmt[1], ageSmt[2], ageSmt[3]],
                },
                {
                  label: 'ITI',
                  backgroundColor: [
                    '#FF7043',
                    '#FF7043',
                    '#FF7043',
                    '#FF7043'
                  ],
                  data: [ageIti[0], ageIti[1], ageIti[2], ageIti[3]],
                }
              ]
            };
            var options4 = {
              maintainAspectRatio: false,
              title: {    
                display: true,
                text: '部署ごとの年代別'
              },
              scales: {
                yAxes: [{
                  ticks: {
                          max: 5
                  }
                }]
              },
              legend: {
                display: false
            }
            };
            var canvas4 = document.getElementById('stage4');
            var chart4 = new Chart(canvas4, {
              type: 'bar',
              data: mydata4,
              options: options4

            });

            //入社数の推移
            var hiredayself = hiredayArry.filter(function (x, i, self) {
              return self.indexOf(x) === i;
            });

            hiredayself.sort(function(hiredayself,b){
                if( hiredayself < b ) return -1;
                if( hiredayself > b ) return 1;
                return 0;
            });

            var counts = {};
            for(var i=0;i< hiredayArry.length;i++){
              var key = hiredayArry[i];
              counts[key] = (counts[key])? counts[key] + 1 : 1 ;
            }

            var hiredayData = [];
            for(var i=0;i< hiredayself.length;i++){
              hiredayData.push(counts[hiredayself[i]]);
            }
    
            var mydata5 = {
              labels: hiredayself,
              datasets: [
                {
                  label: '人数',
                  backgroundColor: 'rgba(200,30,30,0.4)',
                  borderColor: 'rgba(230,10,10,1)',
                  data: hiredayData,
                }
              ]
            };
            var options5 = {
              maintainAspectRatio: false,
              title: {    
                display: true,
                text: '入社数の推移'
              },
              scales: {
                yAxes: [{
                  ticks: {
                          max: 14
                  }
                }]
              },
              legend: {
                display: false
            }
            };
            var canvas5 = document.getElementById('stage5');
            var chart5 = new Chart(canvas5, {

              type: 'line',
              data: mydata5,
              options: options5

            });
        }
    });


    









});

