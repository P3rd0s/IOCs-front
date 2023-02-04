import {animate, style, transition, trigger} from "@angular/animations";

const enterLeft = transition('void => readyLeft', [
  style({
    opacity: 0,
    transform: 'translateX(-300px)'
  }),
  animate('0.3s ease-in-out', style({
    opacity: 1,
    transform: 'translateX(0)'
  }))
]);

const enterRight = transition('void => readyRight', [
  style({
    opacity: 0,
    transform: 'translateX(300px)'
  }),
  animate('0.4s ease-in-out', style({
    opacity: 1,
    transform: 'translateX(0)'
  }))
]);

const enterTop = transition('void => readyTop', [
  style({
    opacity: 0,
    transform: 'translateY(-300px)'
  }),
  animate('0.35s ease-in-out', style({
    opacity: 1,
    transform: 'translateY(0)'
  }))
]);


const enterBottom = transition('void => readyBottom', [
  style({
    opacity: 0,
    transform: 'translateX(300px)'
  }),
  animate('0.38s ease-in-out', style({
    opacity: 1,
    transform: 'translateX(0)'
  }))
]);

export const tileFromLeft = trigger('leftFade', [enterLeft]);
export const tileFromRight = trigger('rightFade', [enterRight]);
export const tileFromTop = trigger('topFade', [enterTop]);
export const tileFromBottom = trigger('bottomFade', [enterBottom]);
