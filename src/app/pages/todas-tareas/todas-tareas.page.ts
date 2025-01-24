import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-todas-tareas',
  templateUrl: './todas-tareas.page.html',
  styleUrls: ['./todas-tareas.page.scss'],
  standalone: true,
  imports: [IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TodasTareasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
