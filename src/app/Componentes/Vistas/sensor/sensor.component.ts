import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { interval } from 'rxjs';
import { Sensor } from 'src/app/models/sensor';
import { SensorService } from 'src/app/servicio/sensores/sensores.service';
import Swal from 'sweetalert';


@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {
  @Input() dataEntrante: any;

  sensor!: Sensor
  sensores: Sensor[] | undefined
  FormularioRegistro = new FormGroup({
    Nombre_Sensor: new FormControl(null, [Validators.required])
  })

  constructor(private sensorservi: SensorService) {
    const contador = interval(3000)
    contador.subscribe(async () => {

      (await this.sensorservi.mostrarSensor()).subscribe(
        (res: any) => {
          this.sensor = res;
        },
        (err) => console.error(err)
      );
    })

  }
  mandar() {
    console.log(this.dataEntrante);
  }



  showModal() {
    if (this.FormularioRegistro.valid) {
      Swal({
        title: "Sensor Registrado Con Exito",
        icon: "success",
      });
    }
    else {
      Swal({
        title: 'Ocurrio un ERROR al intentar registrar el sensor',
        icon: "warning"
      })
    }


  }

  ngOnInit(): void {
  }

}
