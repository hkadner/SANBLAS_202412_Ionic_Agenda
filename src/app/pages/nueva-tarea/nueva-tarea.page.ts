import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonSelect, IonSelectOption, IonDatetimeButton, IonModal, IonTextarea, IonItem, IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonList, IonDatetime, IonLabel, IonButton, IonToast } from '@ionic/angular/standalone';
import { Tarea } from 'src/app/interfaces/tarea';
import { TareasManagerService } from 'src/app/services/tareas-manager.service';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.page.html',
  styleUrls: ['./nueva-tarea.page.scss'],
  standalone: true,
  imports: [IonToast, IonButton, IonLabel, IonSelect, IonSelectOption, IonDatetimeButton, IonModal, IonDatetime, IonTextarea, IonInput, IonList, IonItem, IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NuevaTareaPage implements OnInit {
  tarea: Tarea = {};
  gestorTareas = inject(TareasManagerService);//Obtenemos la referencia al servicio
  constructor() { 
    this.tarea.estado = 'Pendiente';
    this.tarea.fechaLimite = new Date().toISOString();
  }

  ngOnInit() {
  }

  guardarTarea() {
    console.log("Guardando tarea", this.tarea);
    this.gestorTareas.addTarea(this.tarea);
    this.tarea = {};
  }
}
