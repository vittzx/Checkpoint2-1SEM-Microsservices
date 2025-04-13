import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import necessário


@Component({
  selector: 'app-ex5',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ex5.component.html',
  styleUrl: './ex5.component.css'
})
export class Ex5Component {
  statusPedido: string  = "pendente";
}
