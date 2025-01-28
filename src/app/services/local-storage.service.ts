import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  static readonly TAREAS_KEY : string = 'tareas';
  constructor() { }
  guardarTareas(tareas: Array<Tarea>) {
    localStorage.setItem(LocalStorageService.TAREAS_KEY, JSON.stringify(tareas));//stringify convierte el array de tareas en un string
  }
  getTareas() : Array<Tarea> {
    let tareas = localStorage.getItem(LocalStorageService.TAREAS_KEY);
    if(tareas) {
      return JSON.parse(tareas);//Convertimos el string a un array de tareas
    }
    return [];
  }
}