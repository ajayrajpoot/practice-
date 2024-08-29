/*
In Angular, particularly when working with RxJS (Reactive Extensions for JavaScript), operators like switchMap, mergeMap, forkJoin, combineLatest, concatMap, and exhaustMap are used to handle and manage multiple asynchronous operations, such as HTTP requests. Here's an explanation of each operator, along with their behavior in the event of a failure:

1. switchMap
  Description: switchMap is an RxJS operator that maps each value from the source Observable into an inner Observable, then flattens the inner Observables. If a new inner Observable is emitted before the previous one completes, switchMap unsubscribes from the previous one and subscribes to the new one.
  Use Case: Ideal when you want to cancel previous requests or operations when a new one is initiated, like search suggestions.
  Failure Handling: If an inner Observable fails, the outer Observable also fails, and no further emissions occur.
  Example:
  typescript
  Copy code
  source$.pipe(
    switchMap(value => this.http.get(`/api/data/${value}`))
  ).subscribe(result => console.log(result));
  Behavior: If a new value comes in before the current request completes, the current request is canceled, and a new request is made.

2. mergeMap (also known as flatMap)
  Description: mergeMap maps each value from the source Observable into an inner Observable, then flattens all the inner Observables into a single Observable, allowing multiple active inner Observables concurrently.
  Use Case: Useful when you need to perform multiple asynchronous operations in parallel and collect all the results.
  Failure Handling: If any inner Observable fails, the entire stream fails, and no further emissions occur.
  Example:
  typescript
  Copy code
  source$.pipe(
    mergeMap(value => this.http.get(`/api/data/${value}`))
  ).subscribe(result => console.log(result));
  Behavior: All emitted inner Observables run concurrently, and their results are emitted in the order they complete.

3. forkJoin
  Description: forkJoin is a static RxJS operator that takes multiple Observables and returns an Observable that emits an array of the last emitted values from each of the input Observables once all of them have completed.
  Use Case: Ideal for situations where you need all results from multiple parallel requests before proceeding.
  Failure Handling: If any Observable fails, the entire forkJoin Observable fails, and no values are emitted.
  Example:
  typescript
  Copy code
  forkJoin([
    this.http.get('/api/data1'),
    this.http.get('/api/data2')
  ]).subscribe(results => console.log(results));
  Behavior: Only emits when all Observables complete. If any Observable fails, the entire operation fails.

4. combineLatest
  Description: combineLatest is a static RxJS operator that takes multiple Observables and returns an Observable that emits an array of the latest values from each of the input Observables every time any of them emits.
  Use Case: Useful when you want to react to the latest values from multiple Observables whenever any of them changes.
  Failure Handling: If any Observable fails, the entire combineLatest Observable fails.
  Example:
  typescript
  Copy code
  combineLatest([
    this.http.get('/api/data1'),
    this.http.get('/api/data2')
  ]).subscribe(results => console.log(results));
  Behavior: Emits whenever any input Observable emits, combining the latest values from all Observables.

5. concatMap
  Description: concatMap maps each value from the source Observable into an inner Observable, then flattens them in a serial (sequential) manner, waiting for each inner Observable to complete before moving on to the next one.
  Use Case: Useful when the order of execution matters and you want to ensure that requests or operations are performed one after the other.
  Failure Handling: If any inner Observable fails, the entire stream fails, and no further emissions occur.
  Example:
  typescript
  Copy code
  source$.pipe(
    concatMap(value => this.http.get(`/api/data/${value}`))
  ).subscribe(result => console.log(result));
  Behavior: Executes each request in order, waiting for the previous one to complete before starting the next.
  
6. exhaustMap
  Description: exhaustMap maps each value from the source Observable into an inner Observable, but ignores any new source values until the current inner Observable completes.
  Use Case: Useful in scenarios where you want to ignore new emissions until the current operation is done, like handling button clicks to prevent multiple submissions.
  Failure Handling: If the inner Observable fails, the entire stream fails, and no further emissions occur.
  Example:
  typescript
  Copy code
  source$.pipe(
    exhaustMap(value => this.http.get(`/api/data/${value}`))
  ).subscribe(result => console.log(result));
  Behavior: If a new value is emitted while the current request is still ongoing, the new value is ignored.


What Happens if Any Request Fails?
  switchMap: If the inner Observable fails, the entire chain fails, and no further Observables are subscribed to.
  mergeMap: If any inner Observable fails, the entire chain fails, and subsequent Observables do not emit.
  forkJoin: If any of the participating Observables fail, the entire forkJoin fails, and no results are emitted.
  
Summary
  switchMap: Switches to a new Observable and cancels the previous one. If an inner Observable fails, the entire operation fails.
  mergeMap: Merges multiple Observables concurrently. If any fails, the whole operation fails.
  concatMap: Maps and executes Observables sequentially. Fails if any Observable fails.
  exhaustMap: Ignores new emissions until the current Observable completes. Fails if the inner Observable fails.
  
  forkJoin: Waits for all Observables to complete and emits the final result. Fails if any Observable fails.
  combineLatest: Emits the latest values from all Observables whenever any of them emits. Fails if any Observable fails.
  

  
  mergeMap
  flatMap:
  concatMap
  switchMap
   exhaustMap

   
  foo$ = from([1,2,3,4,5]).pipe(map((d)=> d*10)) //\

output
10
20
30
40
50

  const example = (operator:any)=>{
      from([0,1,2,3,4])
        .pipe(operator((x:any)=> of(x).pipe(delay(500) ) ))
        .subscribe(
          console.log, 
          ()=> { },
          ()=> console.log(`${operator.name} Completed`)
        );
    }
      
    example(mergeMap)
    outplut: no delay for out , out put give simaniuslly
    0
    1
    2
    3
    4
    mergeMap Completed

    example(flatMap)(old version of mergeMap)

    outplut: no delay for out , out put give simaniuslly
    0
    1
    2
    3
    4
    flatMap Completed

    example(concatMap)
    outplut: return one by one , return previous is copleat
    0
    1
    2
    3
    4
    concatMap Completed

    
    example(switchMap)
    outplut: return one by one ,wait for pevious, and cancel previous one
    4
    switchMap Completed

    
    example(exhaustMap)
    outplut: return one by one ,all next obsebale ignor, and cancel previous one
    0
    exhaustMap Completed




   ----------------------------------
   users = [
   {id:1, name: 'John', isActive: true},
   {id:2, name: 'namwen', isActive: true },
   {id:3, name: 'Peter', isActive: false},
   {id:4, name: 'Jane', isActive: true},
   {id:5, name: 'Tom', isActive: false}
   ]

  users$ = of(users); // create observable stream.
  usersnames$ = this.users$.pipe(map((users) => users.map(user=>user.name))); // create  .
  Filterusersnames$ = this.users$.pipe(filter((users) => users.every(user=>user.isActive))); // create  .
    
  <li *ngFor="let user of users$ | async">{{ user.name }} (Active: {{ user.isActive }})</li>
  <li *ngFor=" user$ | async as user">{{ user.name }} (Active: {{ user.isActive }})</li>
   


  documentClicl$ = fromEvent(document, 'click');

  ngOnInit();void{
  this.documentClicl$.subscribe(e=>{
    console.log('Document Clicked', e);
    // perform actions here
  })
  }


  data$ = combineLatest([
  this.users$,
  this.username,
  this.filterUsersnames$
  ]).pipe(([users, username.fiteredUsers]) =>({
    users, username.fiteredUsers
    }))