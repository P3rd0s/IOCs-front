import {animate, style, transition, trigger} from "@angular/animations";

const enterTransition = transition(':enter', [
  style({ opacity: 0 }),
  animate('0.3s ease-in-out', style({ opacity: 1 }))
]);

const leaveTrans = transition(':leave', [
  style({ opacity: 1 }),
  animate('0.3s ease-in-out', style({ opacity: 0 }))
])

export const fadeListIn = trigger('fadeListIn', [enterTransition]);

export const fadeListOut = trigger('fadeListOut', [leaveTrans]);
