import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2',
  standalone: true,
  imports: [],
  templateUrl: './ex2.component.html',
  styleUrl: './ex2.component.css'
})
export class Ex2Component {
  itens: string[] = ["Maçã", "Banana", "Leite"];

}
