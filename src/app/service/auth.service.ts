import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { concatMap, tap, pluck, take } from 'rxjs/operators';

export interface Meta {
  user_type: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthMetaService {
  private url="https://dev-t-6wv33g.jp.auth0.com";
  metadata: Meta;

  constructor(public auth: AuthService, private http: HttpClient) { }

  getAuth(): void {
    this.auth.user$
    .pipe(
      concatMap((user) =>
        // Use HttpClient to make the call
        this.http.get(
          encodeURI(`${this.url}/api/v2/users/${user.sub}`)
        )
      ),
      pluck('user_metadata'),
      tap((meta: Meta) => (this.metadata = meta)),
      take(1)
    )
    .subscribe();
  }
}
