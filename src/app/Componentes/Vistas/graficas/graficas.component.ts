import { Component, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';
import { Grafica } from 'src/app/models/hibrido';
import { SensorService } from 'src/app/servicio/sensores/sensores.service';


@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  chart: any =[]
   
  Grafica!:Grafica[]

  grafica(){

  this.traer.traerdht11().subscribe((data:any) => {
    console.log(data)
    this.Grafica = data
    var fecha = []
    var temperatura = []
    var humedad = []

    for (var i in data) {
      fecha.push(data[i].Fechacreacion)
      temperatura.push(data[i].Temperatura)
      humedad.push(data[i].Humedad)
    }

    this.chart = new Chart("canvas", {
      type: 'bar',  
      data: {
          labels: fecha,
          datasets: [{
              label: 'Temperatura',
              data:temperatura,
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
          },
          {
            label: 'Humedad',
            data:humedad,
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
 constructor ( private traer:SensorService){
  Chart.register(...registerables)
 

   
 }

  ngOnInit(): void {
    this.grafica()
  }

}
