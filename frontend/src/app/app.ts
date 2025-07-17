import { Component } from '@angular/core';
import { Footer } from "./layout/footer/footer";
import { Header } from "./layout/header/header";
import { RouterOutlet } from '@angular/router';
import { Home } from './features/home/home';
@Component({
  selector: 'app-root',
  imports: [Footer, RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';
}
