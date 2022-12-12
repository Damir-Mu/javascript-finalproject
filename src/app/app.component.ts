import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from './shared/services/auth.service';
import {
  Router,
  NavigationEnd,
  Event as NavigationEvent,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'angularfirebase-authentication';

  public itemCount: number = 5;

  private _cartSubscription: Subscription | null = null;

  public routeFound: boolean = false;
  private _event$;
  private _routes;

  constructor(
    private _router: Router,
    public authService: AuthService
  ) {
    console.log(this._router.config);
    this._routes = this._router.config
      .map((route) => route.path)
      .filter((route) => route != '**');
    this._event$ = this._router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        let url = event.url.split('/')[1];
        this._routes.filter((route) => {
          if (route!.split('/')[0] == url) {
            this.routeFound = true;
          }
        });
      }
    });
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    if (this._cartSubscription) {
      this._cartSubscription.unsubscribe();
    }
  }
}
