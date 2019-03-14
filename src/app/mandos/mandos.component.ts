import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

import { MandosService } from '../services/index.services';

@Component({
  selector: 'app-mandos',
  templateUrl: './mandos.component.html',
  styleUrls: ['./mandos.component.css']
})
export class MandosComponent implements OnInit {

  mando: any = {};
  mandoUpdate: any = {};
  mandos: any = [];

  constructor(
    public mandosService: MandosService
  ) { 
    this.obtenerMandos();
  }

  obtenerMandos() {
    this.mandosService.getMandos()
      .then((mandos: any) => {
        this.mandos = mandos;
      }, err => {
        swal.fire(err);
      })
  }

  registrarMando() {
    this.mandosService.createMando(this.mando)
      .then((response: any) => {
        swal.fire(
          response.mensaje,
          'EL mando ha sido registrado con éxito',
          'success'
        )
        this.mando.mando = '';
        this.mandos.push(response.mando);
      })
  }

  seleccionarMando(mando: any) {
    this.mandoUpdate = mando;
  }

  actualizarMando() {
    this.mandosService.updateMando(this.mandoUpdate)
    .then((response: any)=>{
      swal.fire(
        response.mensaje,
        'EL mando ha sido actualizado con éxito',
        'success'
      )
    }, err => {
      swal.fire(err);
    })
  }

  eliminarMando(mando: any) {
    swal.fire({
      title: '¿Estás seguro/a de eliminar el mando "' + mando.mando + '"?',
      text: "",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.value) {
        this.mandosService.deleteMando(mando)
          .then((response: any) => {
            swal.fire(
              response.mensaje,
              'El mando ha sido borrado con éxito',
              'success'
            )
            this.obtenerMandos();
          }, err => {
            console.log('Error ' + err)
          })
      }
    })
  }
  ngOnInit() {
  }

}
