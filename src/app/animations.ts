import { query, style, transition, trigger, animateChild, group, animate } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* => isLeft', slideTo('left')),
  transition('* => isRight', slideTo('right')),
  transition('isRight => *', slideTo('left')),
  transition('isLeft => *', slideTo('right')),
]);

function slideTo(direction: string) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%',
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%' }),
    ]),
    group([
      query(':leave', [
        animate('700ms ease', style({ [direction]: '100%' })),
      ], optional),
      query(':enter', [
        animate('700ms ease', style({ [direction]: '0%' })),
      ]),
    ]),
  ];
}
