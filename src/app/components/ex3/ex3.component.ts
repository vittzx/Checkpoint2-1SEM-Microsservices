import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ex3.component.html',
  styleUrl: './ex3.component.css'
})
export class Ex3Component {
  idade: number = 17
}
