import {animate, style, transition, trigger} from "@angular/animations";

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
    transform: 'translateX(-300px)'
  }),
  animate('0.3s ease-in-out', style({
    opacity: 1,
    transform: 'translateX(0)'
  }))
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('0.3s ease-in-out', style({
    opacity: 0,
    transform: 'translateX(300px)'
  }))
])

export const fadeCardIn = trigger('fadeCardIn', [
  enterTransition
]);

export const fadeCardOut = trigger('fadeCardOut', [
  leaveTrans
]);
