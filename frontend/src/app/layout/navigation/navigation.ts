import { Component} from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  templateUrl: './navigation.html',
  styleUrl: './navigation.css'
})
export class Navigation {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
