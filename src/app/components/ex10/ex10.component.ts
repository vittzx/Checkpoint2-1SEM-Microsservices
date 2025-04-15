import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex10',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ex10.component.html',
  styleUrl: './ex10.component.css'
})
export class Ex10Component {
  numero1: number =1;
  numero2: number =1;
  opcao: string = "soma";
}
