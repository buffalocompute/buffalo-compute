import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  standalone: true,
  imports: [RouterOutlet],
  styleUrl: './swiper.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperComponent {}
