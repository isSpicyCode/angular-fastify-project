import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'contact', component: Contact }
];
