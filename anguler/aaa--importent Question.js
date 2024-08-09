/**
 * 11. How to optimize Angular application using OnPush change detection strategy ?
The OnPush change detection strategy in Angular is designed to optimize performance by reducing the number of change detection cycles. It is based on the concept of immutability and relies on input properties and explicit change detection triggering.
To optimize an Angular application using the OnPush strategy, follow these steps:
Let’s assume we have a parent component called ParentComponent and a child component called ChildComponent. The child component receives an array of items as an input property and displays them in a list. We’ll optimize this scenario using the OnPush strategy.
Use the OnPush change detection strategy in components:
 // parent.component.ts
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-child [items]="items"></app-child>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  addItem() {
    this.items.push('New Item'); // Incorrect way to update the array
  }
}
 // child.component.ts
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <ul>
      <li *ngfor="let item of items">{{ item }}</li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() items: string[];
}
type
In the above code, both the ParentComponent and ChildComponent are using the OnPush change detection strategy.
2. Use immutable data for input properties:
 // parent.component.ts
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-child [items]="items"></app-child>
    <button (click)="addItem()">Add Item</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  addItem() {
    this.items = [...this.items, 'New Item']; // Correct way to update the array using spread operator
  }
}
In the ParentComponent, when adding a new item to the items array, we create a new array using the spread operator […this.items] and then add the new item. This ensures that a new reference is created, which triggers change detection in the ChildComponent when the input property changes.
Conclusion :
By applying these optimization techniques, you can enhance the performance of your Angular application with the OnPush change detection strategy. Immutable data help minimize unnecessary change detection cycles, resulting in improved efficiency and responsiveness.


--------------------------------------------

15. Explain switch map , mergemap , forkjoin, combineLatest, concatMap, exhaustMap . what would happen if any of the requests fails in switch map , merge map or forkjoin ?
Let’s go through each operator and explain them along with examples. We’ll also discuss what happens if any of the requests fail when using switchMap, mergeMap, or forkJoin.
switchMap: This operator is used to map each source value to an inner observable, and it only emits the values from the most recent inner observable. If a new source value arrives before the previous inner observable completes, it will switch to the new inner observable and unsubscribe from the previous one.
Example:
 import { of, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
  const $switchMap = from([1,2,3,4]).pipe(switchMap(data=>{
    return of(data).pipe(delay(500))
  }));

  $switchMap.subscribe(data=>{
    console.log('switch map data', data); // 4 as switchMap cancels all previous observables when new observable is emitted
  })
In this example, sourceObservable emits values every second. For each value emitted, switchMap creates an inner observable using from operator and emits the value from the source observable after a delay of one second. If a new value is emitted before the previous inner observable completes, it switches to the new inner observable and cancels the previous one. Therefore, only the most recent inner observable value will be emitted.

2. mergeMap: This operator maps each source value to an inner observable and merges the values from multiple inner observables into a single observable. It does not cancel or unsubscribe from any inner observables.
Example:
 import { of } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';

// Create an observable that emits three values
const sourceObservable = of(1, 2, 3);

// Use mergeMap to merge the values from the inner observables
const resultObservable = sourceObservable.pipe(
  mergeMap((value) => {
    // Create an inner observable that emits the value after a delay
    return of(value).pipe(delay(1000));
  })
);

// Subscribe to the result observable
resultObservable.subscribe((value) => {
  console.log(value); // 1 2 3 
});
In this example, sourceObservable emits three values: 1, 2, and 3. For each value emitted, mergeMap creates an inner observable using of operator and emits the value after a delay of one second. Since mergeMap does not cancel or switch between inner observables, all the values from each inner observable will be merged into a single observable and emitted in the order they complete.

3. forkJoin: This operator takes an array of observables and waits for all the source observables to complete. Once they all complete, it emits an array of the last emitted values from each observable.
Example:
 import { forkJoin, of, throwError } from 'rxjs';

 const observables = [
     of(1,2,3).pipe(delay(500)),
    from([10,11,12])
  ]

  const $forkJoin = forkJoin(observables);

  $forkJoin.subscribe(data=>{
    console.log('forkjoin data', data); // [3,12] as forkJoin will return last emitted values of each observable
  })
  
In this example, forkJoin takes an array of observables, including two observables that emit ‘A’ and ‘B’ respectively after a delay, and an observable that throws an error after a delay. forkJoin waits for all the observables to complete, and once they complete, it emits an array of the last emitted values from each observable. However, if any of the observables in forkJoin throws an error, the error will be propagated to the error callback of the subscribe method.

4. combineLatest: This operator combines the latest values from multiple observables into a single observable. It emits an array of the latest values whenever any of the source observables emit a new value.
Example:
 import { combineLatest, interval } from 'rxjs';
  const observables = [
     of(1,2,3,4),
     from([10,11,12])
  ]

  const $combineLatest = combineLatest(observables);

  $combineLatest.subscribe(data=> {
    console.log('combineLatest data', data);
  })
/*  output */
// [4, 10]
// [4,11]
// [4,12]
If our observable is as shown below :
 const observables = [
    of(1,2,3,4).pipe(delay(500)), 
    from([10,11,12])
  ]

then output will be as follows

// [12,1]
// [12,2]
// [12,3]
// [12,4]
The console.log() output from the project function shows that the last emitted value from the first completed observable is used in all calculations. It is combined with each of the second observable values .Hence: if one observable emits values before the others do, then those values are lost.

5. concatMap: This operator maps each source value to an inner observable and concatenates the values from each inner observable sequentially. It waits for each inner observable to complete before moving on to the next one. Use concatMap over mergeMap when order is important for you.
Example:
 import { of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

// Create an observable that emits three values
const sourceObservable = of(1, 2, 3);

// Use concatMap to concatenate the values from the inner observables
const resultObservable = sourceObservable.pipe(
  concatMap((value) => {
    // Create an inner observable that emits the value after a delay
    return of(value).pipe(delay(1000));
  })
);

// Subscribe to the result observable
resultObservable.subscribe((value) => {
  console.log(value); // 1  2  3
});
In this example, sourceObservable emits three values: 1, 2, and 3. For each value emitted, concatMap creates an inner observable using of operator and emits the value after a delay of one second. It waits for each inner observable to complete before moving on to the next one. Therefore, the values from each inner observable will be emitted sequentially in the order they were mapped.

6. exhaustMap: The exhaustMap operator works by mapping each source value to an observable, and then subscribing to that observable. It ensures that only one inner observable is active at a time. If a new source value arrives while an inner observable is still active, the new value is ignored until the inner observable completes.
Here’s an example to demonstrate the usage of exhaustMap in Angular:
 const $exhaustMap = from([1,2,3,4]).pipe(
    exhaustMap(data=>{
      return of(data).pipe(delay(500)); 
    })
  )

  $exhaustMap.subscribe(data=> {
    console.log('exhaustMap data', data); //1
  })
Regarding what happens if any of the requests fail in switchMap, mergeMap, or forkJoin:

— switchMap: If any of the inner observables created by switchMap throws an error, the error will be propagated to the error callback of the subscribe method. Additionally, the subscription to the previous inner observable will be canceled, and switchMap will switch to the new inner observable.

— mergeMap: If any of the inner observables created by mergeMap throws an error, the error will be propagated to the error callback of the subscribe method. However, the error in one inner observable will not affect the other inner observables. mergeMap will continue to merge values from other inner observables.

-forkJoin: If any of the observables passed to forkJoin throws an error, the error will be propagated to the error callback of the subscribe method. In this case, forkJoin will not emit any result value. If you need to handle individual errors of each observable in forkJoin, you can use the catchError operator within each observable before passing them to forkJoin.
It’s important to note that error handling strategies and behavior may vary based on your specific use case and how you handle errors within your code.




--------------------------

What is a difference between compiler and interpreter?
Compiler: A compiler translates code from a high-level programming language (like Python, JavaScript or Go) into machine code before the program runs. Interpreter: An interpreter translates code written in a high-level programming language into machine code line-by-line as the code runs.
What is the difference between a compiled language and an interpreter?
A compiled language is converted into machine code so that the processor can execute it. An interpreted language is a language in which the implementations execute instructions directly without earlier compiling a program into machine language. The compiled programs run faster than interpreted programs.

 */