import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, style, animate,state } from '@angular/animations';


export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1000ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('1000ms', style({ opacity: 0 })),
  ]),
]);

export const flyInOut = trigger('flyInOut', [
  state('in', style({ transform: 'translateX(0)' })),
  transition(':enter', [
    style({ transform: 'translateX(100%)' }),
    animate('300ms ease-out')
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateX(100%)' }))
  ])
])


@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent {
  

}
