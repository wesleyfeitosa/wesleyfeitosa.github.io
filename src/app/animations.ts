import { query, style, transition, trigger, animateChild, group, animate } from '@angular/animations';

export const slideInAnimation = 
  trigger('routeAnimations', [
    transition('* => isLeft', slideTo('left')),
    transition('* => isRight', slideTo('right')),
    transition('isRight => *', slideTo('left')),
    transition('isLeft => *', slideTo('right')),
  ]);

function slideTo(direction: string){
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
      style({ [direction]: '-100%' })
    ]),
    group([
      query(':leave', [
        animate('700ms ease', style({ [direction]: '100%' }))
      ], optional),
      query(':enter', [
        animate('700ms ease', style({ [direction]: '0%' }))
      ])
    ])
  ];
}

// export const slideInAnimation =
//   trigger('routeAnimations', [
//     transition('* <=> *', [
//       style({ position: 'relative' }),
//       query(':enter, :leave', [
//         style({
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%'
//         })
//       ]),
//       query(':enter', [
//         style({ left: '-100%' })
//       ]),
//       query(':leave', animateChild()),
//       group([
//         query(':leave', [
//           animate('800ms ease-out', style({ left: '100%' }))
//         ]),
//         query(':enter', [
//           animate('800ms ease-out', style({ left: '0%' }))
//         ])
//       ]),
//       query(':enter', animateChild()),
//     ]),
//     transition('* <=> FilterPage', [
//       style({ position: 'relative' }),
//       query(':enter, :leave', [
//         style({
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%'
//         })
//       ]),
//       query(':enter', [
//         style({ left: '-100%' })
//       ]),
//       query(':leave', animateChild()),
//       group([
//         query(':leave', [
//           animate('200ms ease-out', style({ left: '100%' }))
//         ]),
//         query(':enter', [
//           animate('300ms ease-out', style({ left: '0%' }))
//         ])
//       ]),
//       query(':enter', animateChild()),
//     ])
//   ]);