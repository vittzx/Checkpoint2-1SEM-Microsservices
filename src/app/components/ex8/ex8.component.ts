import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex8',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ex8.component.html',
  styleUrl: './ex8.component.css'
})
export class Ex8Component {
  email: string = "";
  senha: string = "";
}
