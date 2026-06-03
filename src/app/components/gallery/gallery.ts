import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.scss']
})
export class GalleryComponent {

  images: string[] = [
    '/images/gallery-1.jpg',
    '/images/gallery-2.jpg',
    '/images/gallery-3.jpg',
    '/images/gallery-4.jpg',
    '/images/gallery-5.jpg',
    '/images/picture.JPG'
  ];

  selectedImage: string | null = null;
  currentIndex = 0;

  openImage(image: string): void {
    this.currentIndex = this.images.indexOf(image);
    this.selectedImage = image;
  }

  closeImage(): void {
    this.selectedImage = null;
  }

  nextImage(): void {
    this.currentIndex =
      (this.currentIndex + 1) % this.images.length;

    this.selectedImage =
      this.images[this.currentIndex];
  }

  previousImage(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) %
      this.images.length;

    this.selectedImage =
      this.images[this.currentIndex];
  }

}
