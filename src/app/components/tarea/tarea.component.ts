import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from 'src/app/interfaces/tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss'],
})
export class TareaComponent  implements OnInit {
  @Input() tarea : Tarea = {};
  constructor() { }

  ngOnInit() {}

}
