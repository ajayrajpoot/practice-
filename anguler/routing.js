/**
 * 
 * 9. How to hit an API before the loading of the appComponent ?
The package @angular/router has the Resolve property for routes. So you can easily resolve data before rendering a route view. The following example implements a resolve() method that retrieves the data needed to activate the requested route.
 @Injectable({ providedIn: 'root' })
export class HeroResolver implements Resolve {
  constructor(private service: HeroService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable|Promise|any {
    return this.service.getHero(route.paramMap.get('id'));
  }
}
Here, the defined resolve() function is provided as part of the Route object in the router configuration:
 @NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'detail/:id',
        component: HeroDetailComponent,
        resolve: {
          hero: HeroResolver
        }
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


 */