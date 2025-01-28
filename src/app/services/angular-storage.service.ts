import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea';
import { Storage } from '@ionic/storage-angular'//Persistencia

@Injectable({
  providedIn: 'root'
})
export class AngularStorageService {
  static readonly TAREAS_KEY: string = 'tareas';

  constructor(private storage: Storage) { //Persistencia
    this.init(); //Persistencia
  }

  async init() { //Persistencia
    this.storage = await this.storage.create();
  }

  guardarTareas(tareas: Array<Tarea>) {
    //Procesamos el objeto Promise aquí
    this.storage.set(AngularStorageService.TAREAS_KEY, tareas)
      .then(()=>{
        console.info("Proceso de almacenamiento realizado correctamente")
      })
      .catch((error)=>{
        console.error(error);
      })
      .finally(()=>{
        console.info("Fin del proceso de almacenamiento")
      });
  }

  getTareas(): Promise<Array<Tarea>> {
    //Devolvemos el objeto Promise para que lo procese el servicio TareasManagerService
    return this.storage.get(AngularStorageService.TAREAS_KEY);
  }
}
