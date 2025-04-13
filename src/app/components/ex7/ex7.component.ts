import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex7',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ex7.component.html',
  styleUrl: './ex7.component.css'
})
export class Ex7Component {
  valor: string = "1"
}
