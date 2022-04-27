import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Grafica2 } from 'src/app/models/hibrido';
import { SensorService } from 'src/app/servicio/sensores/sensores.service';

@Component({
  selector: 'app-documentacion',
  templateUrl: './documentacion.component.html',
  styleUrls: ['./documentacion.component.css']
})
export class DocumentacionComponent implements OnInit {

  chart: any =[]

  Grafica2!:Grafica2[]

  grafica2(){
    this.traer.traerultra().subscribe((data:any) =>{
      console.log(data)
      this.Grafica2 = data
      var fecha = []
      var distancia = []

      for (var i in data) {
        fecha.push(data[i].Fechacreacion)
        distancia.push(data[i].Distancia)
       
      }

      this.chart = new Chart ("canvas", {
        type: 'bar',  
        data: {
            labels: fecha,
            datasets: [{
                label: 'Distancia',
                data:distancia,
                backgroundColor: [
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
                borderWidth: 1
            }]
      
          
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    })
  }

  constructor(private traer:SensorService) { 
    Chart.register(...registerables)
  }

  ngOnInit(): void {
    this.grafica2()
  }

}



