import { Component, Input, OnInit } from '@angular/core';
import { Criticidad, Tarea } from 'src/app/interfaces/tarea';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/angular/standalone";
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, NgStyle, NgClass]
})
export class TareaComponent implements OnInit {
  @Input() tarea: Tarea = {};
  //Para ngStyle
  estiloEstado = {}
  estiloPendiente = { color: 'red' }
  estiloEnProceso = { color: 'orange' }
  estiloTerminada = { color: 'green' }
  //Para ngClass
  tipoCriticidad = '';
  constructor() {

  }

  ngOnInit() {
    switch (this.tarea.estado) {
      case 'Pendiente':
        this.estiloEstado = this.estiloPendiente;
        break;
      case 'En proceso':
        this.estiloEstado = this.estiloEnProceso;
        break;
      case 'Finalizada':
        this.estiloEstado = this.estiloTerminada;
        break;
    }

    switch (this.tarea.criticidad) {
      case Criticidad.BAJA:
        this.tipoCriticidad = 'criticidad-baja';
        break;
      case Criticidad.MEDIA:
        this.tipoCriticidad = 'criticidad-media';
        break;
      case Criticidad.ALTA:
        this.tipoCriticidad = 'criticidad-alta';
        break;
    }
  }
}
