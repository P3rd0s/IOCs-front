import {animate, style, transition, trigger} from "@angular/animations";

const tableFade = transition(':enter', [
  style({
    opacity: 0,
    transform: 'scale(0)'
  }),
  animate('0.3s ease-in-out', style({
    opacity: 1,
    transform: 'scale(1)'
  }))
]);

export const tableFadeScale = trigger('tableFade', [tableFade]);
