import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonSelect, IonSelectOption, IonDatetimeButton, IonModal, IonTextarea, IonItem, IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonList, IonDatetime, IonLabel } from '@ionic/angular/standalone';
import { Tarea } from 'src/app/interfaces/tarea';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.page.html',
  styleUrls: ['./nueva-tarea.page.scss'],
  standalone: true,
  imports: [IonLabel, IonButton, IonSelect, IonSelectOption, IonDatetimeButton, IonModal, IonDatetime, IonTextarea, IonInput, IonList, IonItem, IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NuevaTareaPage implements OnInit {
  tarea: Tarea = {};

  constructor() { 
    this.tarea.estado = 'Pendiente';
    this.tarea.fechaLimite = new Date().toISOString();
  }

  ngOnInit() {
  }

  guardarTarea() {
    console.log("Guardando tarea", this.tarea);
  }
}
