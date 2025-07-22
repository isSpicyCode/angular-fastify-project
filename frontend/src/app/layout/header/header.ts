import { Component } from '@angular/core';
import { Navigation } from "../navigation/navigation";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [Navigation],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(public router: Router){}

  get imageUrl(): string | null {
    if(this.router.url === '/'){
      return 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
    if(this.router.url === '/contact') {
      return 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
    return null;
  }
  get imageAlt(): string {
    if (this.router.url === '/') return 'Image accueil'
    if (this.router.url === '/contact') return 'Image contact'
    return '';
  }
}
