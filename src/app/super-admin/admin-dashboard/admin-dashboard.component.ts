import { Component, OnInit } from '@angular/core';
import {Chart}from'../../../../node_modules/chart.js';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {

    var myChart = new Chart("myChart", {
      type: 'line',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June','July','Aug','Sep','Oct','Nov','Dec'],fontSize: '30',
          datasets: [{
              label: 'Entrollment',
              data: [2, 4, 3, 5, 2, 3,12,15,10,13,10,5],
              backgroundColor: [
                // '#828282',
                // '#4D59FB',

                    'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 2
          }]
      },
     
      options: {
          scales: { 
              yAxes: [{
                  stacked:true,
                //   ticks: {
                //       beginAtZero: true
                //   }
                // gridLines:{
                //     display:false
                // }
              }],
              xAxes:[{
                gridLines:{
                    display:false
                }
              }]
          }
      }
  });

  var myChart = new Chart("myChart2", {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June','July','Aug','Sep','Oct','Nov','Dec'],
        
        datasets: [{
            label: 'Entrollment',
            data: [2, 4, 3, 5, 2, 3,12,15,20,13,10,5],
            backgroundColor: [
              // '#828282',
              // '#4D59FB',

                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
                '#1C2B2D',
'#1C2B2D',
'#1C2B2D',
'#1C2B2D',
'#1C2B2D',
'#1C2B2D',
'#1C2B2D',
'#1C2B2D',
'#1C2B2D',
'#1C2B2D',
'#1C2B2D',
'#1C2B2D',
'#1C2B2D',
            ],
            borderColor: [
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var myChart = new Chart("myChart3", {
  type: 'bar',
  data: {
      labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June','July','Aug','Sep','Oct','Nov','Dec'],
      datasets: [{
          label: 'Entrollment',
          data: [20, 4, 3, 5, 2, 3,12,15,20,13,10,5],
          backgroundColor: [
            // '#828282',
            // '#4D59FB',
'#1C2B2D',
'#1C2B2D',
'#1C2B2D',
'#1C2B2D',
'#1C2B2D',
'#1C2B2D',
'#1C2B2D',
'#1C2B2D',
'#1C2B2D',
'#1C2B2D',
'#1C2B2D',
'#1C2B2D',
'#1C2B2D',


              // 'rgba(255, 99, 132, 0.2)',
              // 'rgba(54, 162, 235, 0.2)',
              // 'rgba(255, 206, 86, 0.2)',
              // 'rgba(75, 192, 192, 0.2)',
              // 'rgba(153, 102, 255, 0.2)',
              // 'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              // 'rgba(255, 99, 132, 1)',
              // 'rgba(54, 162, 235, 1)',
              // 'rgba(255, 206, 86, 1)',
              // 'rgba(75, 192, 192, 1)',
              // 'rgba(153, 102, 255, 1)',
              // 'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});
  }

}
