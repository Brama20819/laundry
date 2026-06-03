import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './components/navbar/navbar';
import {Hero} from './components/hero/hero';
import {Pricing} from './components/pricing/pricing';
import {Features} from './components/features/features';
import { GalleryComponent} from './components/gallery/gallery';
import {Contact} from './components/contact/contact';
import {Footer} from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, Pricing, Features, GalleryComponent, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dutch-girl-laundry');
}
