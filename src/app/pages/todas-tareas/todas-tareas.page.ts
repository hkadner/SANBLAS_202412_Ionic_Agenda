import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonBadge } from '@ionic/angular/standalone';
import { TareasManagerService } from 'src/app/services/tareas-manager.service';
import { TareaComponent } from "../../components/tarea/tarea.component";
import { Tarea } from 'src/app/interfaces/tarea';

@Component({
  selector: 'app-todas-tareas',
  templateUrl: './todas-tareas.page.html',
  styleUrls: ['./todas-tareas.page.scss'],
  standalone: true,
  imports: [IonBadge, IonItem, IonList, IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TareaComponent]
})
export class TodasTareasPage implements OnInit {

  tareasManager = inject(TareasManagerService);
  tareas : Tarea[]= []
  constructor() { }

  ngOnInit() {
    /*
    El método getTareas es un método síncrono pero la carga inicial de las
    tareas en el servicio se hace de forma asíncrona.
    Si no se espera a la carga (100ms es suficiente) la primera vez la
    página aparecerá vacía.
    */
    setTimeout(()=>{
      this.tareas = this.tareasManager.getTareas();
    },100);
  } 

}
