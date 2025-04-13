import { Component } from '@angular/core';

@Component({
  selector: 'app-ex4',
  standalone: true,
  imports: [],
  templateUrl: './ex4.component.html',
  styleUrl: './ex4.component.css'
})
export class Ex4Component {
  tarefas: string[] = ['Estudar Angular', 'Fazer exercícios', 'Revisar código'];
  
  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }
}
