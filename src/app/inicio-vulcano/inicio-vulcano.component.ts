import { Component, OnInit } from '@angular/core';
import { AvisosService } from '../services/index.services';
@Component({
  selector: 'app-inicio-vulcano',
  templateUrl: './inicio-vulcano.component.html',
  styleUrls: ['./inicio-vulcano.component.css']
})
export class InicioVulcanoComponent implements OnInit {

  vulcano: any = {};
  avisos: any = [];

  constructor(
    public avisosService: AvisosService
  ) {
    this.vulcano = JSON.parse(window.localStorage.getItem('vulcano'));
    this.obtenerAvisosHoy();
  }

  obtenerAvisosHoy() {
    this.avisosService.getAvisosHoy()
      .then(response => {
        this.avisos = response;
      })
  }

  ngOnInit() {
  }

}
