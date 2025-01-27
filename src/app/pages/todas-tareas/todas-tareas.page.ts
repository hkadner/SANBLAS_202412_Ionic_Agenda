import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem } from '@ionic/angular/standalone';
import { TareasManagerService } from 'src/app/services/tareas-manager.service';
import { TareaComponent } from "../../components/tarea/tarea.component";

@Component({
  selector: 'app-todas-tareas',
  templateUrl: './todas-tareas.page.html',
  styleUrls: ['./todas-tareas.page.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TareaComponent]
})
export class TodasTareasPage implements OnInit {

  tareasManager = inject(TareasManagerService);
  tareas = this.tareasManager.getTareas();
  constructor() { }

  ngOnInit() {
  }

}
