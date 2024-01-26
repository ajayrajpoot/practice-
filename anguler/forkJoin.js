/* 
7. How to make multiple http calls in parallel in Angular ?
This can be achieved by using forkJoin, this operator takes an array of observables and waits for all the source observables to complete. Once they all complete, it emits an array of the last emitted values from each observable.


 import { forkJoin, of, throwError } from 'rxjs';

 const observables = [
     of(1,2,3).pipe(delay(500)),
    from([10,11,12])
  ]

  const $forkJoin = forkJoin(observables);

  $forkJoin.subscribe(data=>{
    console.log('forkjoin data', data); // [3,12] as forkJoin will return last emitted values of each observable
  })