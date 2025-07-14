import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lens-magnifier',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="activateLens()"><i class="icon-lenc"></i></button>
    <div
      *ngIf="showLens"
      class="lens"
      [ngStyle]="lensStyle"
    ></div>
  `,
  styles: [
    `
      .lens {
        position: fixed;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 2px solid black;
        pointer-events: none;
        background-repeat: no-repeat;
        background-size: calc(100vw * 2) calc(100vh * 2);
        z-index: 9999;
        overflow: hidden;
      }
    `,
  ],
})
export class LensMagnifierComponent {
  showLens: boolean = false;
  lensStyle: { [key: string]: string } = {};
  zoomScale: number = 2;
  lensActive: boolean = false;
  backgroundImage: string = '';

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.lensActive) return;

    const lensSize = 150;
    const x = event.clientX - lensSize / 2;
    const y = event.clientY - lensSize / 2;

    this.lensStyle = {
      top: `${y}px`,
      left: `${x}px`,
      backgroundPosition: `-${x * this.zoomScale - lensSize / 2}px -${y * this.zoomScale - lensSize / 2}px`,
      backgroundImage: `url(${this.backgroundImage})`,
    };

    this.showLens = true;
  }

  @HostListener('document:contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.preventDefault();
    this.deactivateLens();
  }

  activateLens() {
    this.lensActive = true;
    this.captureScreenshot();
  }

  deactivateLens() {
    this.lensActive = false;
    this.showLens = false;
  }

  private captureScreenshot() {
    this.backgroundImage = this.getScreenshot();
  }

  private getScreenshot(): string {
    // Replace this with a method to capture the visible area if needed
    return 'https://via.placeholder.com/1920x1080'; // Dummy placeholder, can be replaced with `html2canvas` for live content capture
  }
}
