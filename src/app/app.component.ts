
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { createOutline, createSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Crear', url: '/nueva-tarea', icon: 'create' },
    { title: 'Todas', url: '/todas-tareas', icon: 'paper-plane' },
    { title: 'Buscar', url: '/buscar-tareas/Todas', icon: 'heart' },
    { title: 'Acerca de...', url: '/acerca-de', icon: 'archive' },
  ];
  public labels = [
    {title: 'Alta', url: '/buscar-tareas/Alta'},
    {title: 'Media', url: '/buscar-tareas/Media'},
    {title: 'Baja', url: '/buscar-tareas/Baja'},
  ];
  constructor() {
    addIcons({ createOutline, createSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
}
