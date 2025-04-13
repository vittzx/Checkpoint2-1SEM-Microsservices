import { Component } from '@angular/core';

@Component({
  selector: 'app-ex9',
  standalone: true,
  imports: [],
  templateUrl: './ex9.component.html',
  styleUrl: './ex9.component.css'
})
export class Ex9Component {
  produtos:{ nome: string; preco: number; promocao: boolean }[] = [
    {nome: "Notebook", preco: 3000, promocao: true},
    {nome: "Mouse", preco: 50, promocao: false},
  ];
}
