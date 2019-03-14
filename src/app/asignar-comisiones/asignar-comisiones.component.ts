import { Component, OnInit } from '@angular/core';
import { ComisionesService, VulcanoService, GuardiasService } from '../services/index.services';

@Component({
  selector: 'app-asignar-comisiones',
  templateUrl: './asignar-comisiones.component.html',
  styleUrls: ['./asignar-comisiones.component.css']
})
export class AsignarComisionesComponent implements OnInit {

  vulcanos: any = [];
  loaderComisiones = false;
  comisiones: any = [];

  guardiaDelDia: any = {};

  comisionesCompletadas: Boolean = false;

  fecha: Date = new Date();

  constructor(
    public vulcanosService: VulcanoService,
    public guardiasService: GuardiasService,
    public comisionesService: ComisionesService
  ) { 
    this.reload()
  }

  ngOnInit() {
  }

  reload(){
    this.obtenerGuardiaHoy();
  }

  obtenerVulcanos() {
    this.vulcanosService.getVulcanosByGuardia(this.guardiaDelDia)
      .then((vulcanos: any) => {
        this.vulcanos = vulcanos;
        this.loaderComisiones = false;
      })
  }

  obtenerGuardiaHoy() {
    this.guardiasService.getGuardiaDia()
      .then((guardia: any) => {
        this.guardiaDelDia = guardia;
        setTimeout(() => {
          this.obtenerVulcanos();
          this.obtenerComisiones();
        }, 2000);
      })
  }

  obtenerComisiones(){
    this.comisionesService.getComisiones()
    .then((comisiones: any)=> {
      this.comisiones = comisiones;
    })
  }

  obtenerComisionesHoy() {
    this.comisionesService.getComisionesHoy()
      .then((response: any) => {
        if (response.mensaje === 'Encontrada') {
          this.comisionesCompletadas = true;
        } else {
          this.comisionesCompletadas = false;
        }
      })
  }

  asignarComision(idComision, idVulcano) {
    
  }
}
