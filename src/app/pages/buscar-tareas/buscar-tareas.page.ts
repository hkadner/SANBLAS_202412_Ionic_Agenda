import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItemSliding, IonItem, IonAvatar, IonLabel, IonItemOptions, IonIcon, IonItemOption, IonInput, IonBadge } from '@ionic/angular/standalone';
import { TareasManagerService } from 'src/app/services/tareas-manager.service';
import { Tarea } from 'src/app/interfaces/tarea';
import { logoIonic } from 'ionicons/icons';
import { addIcons } from 'ionicons';


@Component({
  selector: 'app-buscar-tareas',
  templateUrl: './buscar-tareas.page.html',
  styleUrls: ['./buscar-tareas.page.scss'],
  standalone: true,
  imports: [IonBadge, IonInput, IonItemOption, IonIcon, IonItemOptions, IonLabel, IonAvatar, IonItem, IonItemSliding, IonList, IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BuscarTareasPage implements OnInit {
  textoBusqueda : string = "";
  tareasManager = inject(TareasManagerService);
  tareas = this.tareasManager.getTareas();
  tareasFiltradas = this.tareas;
  constructor() { 
    addIcons({ logoIonic });
  }

  ngOnInit() {
  }

  buscar(){
    this.tareasFiltradas = this.tareas.filter(tarea=>tarea.nombre?.includes(this.textoBusqueda));
  }

  finalizarTarea(tarea : Tarea){
    this.tareasManager.finalizarTarea(tarea);
  }
  procesarTarea(tarea : Tarea){
    this.tareasManager.procesarTarea(tarea);
  }
  reabrirTarea(tarea : Tarea){
    this.tareasManager.reabrirTarea(tarea);
  }
}
