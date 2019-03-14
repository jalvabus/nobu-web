import { Component, OnInit } from '@angular/core';
import {PartesService} from '../services/index.services';

@Component({
  selector: 'app-parte-informativo',
  templateUrl: './parte-informativo.component.html',
  styleUrls: ['./parte-informativo.component.css']
})
export class ParteInformativoComponent implements OnInit {
  cargando = false;

  constructor(
    public partesService: PartesService
  ) { }

  ngOnInit() {
  }

  generarReporte() {
    this.cargando = true;
    this.partesService.verReporte()
      .then((file: any) => {
        console.log(file)
        window.open(file.url, '_blank')
        this.cargando = false;
      })
      .catch((err) => {
        this.cargando = false;
        console.log(err)
      })
  }

}
