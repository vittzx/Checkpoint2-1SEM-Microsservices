import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ex1Component } from './components/ex1/ex1.component';
import { Ex2Component } from './components/ex2/ex2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ex1Component, Ex2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Checkpoint 2 | 1 Semestre';
}
