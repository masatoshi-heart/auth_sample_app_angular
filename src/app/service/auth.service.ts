import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { BehaviorSubject } from 'rxjs';
import { concatMap, pluck, take, map } from 'rxjs/operators';

export interface Meta {
  user_type: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthMetaService {
  private url = 'https://dev-t-6wv33g.jp.auth0.com';
  private _metadata = new BehaviorSubject<Meta>(
    {
      user_type: 'customer'
    }
  );

  get metadata$() {
    return this._metadata.asObservable();
  }

  get isAdmin() {
    return this._metadata.asObservable().pipe(
      map( metadata => metadata.user_type === 'admin' ),
    );
  }

  constructor(public auth: AuthService, private http: HttpClient) { }

  fetchMetadata(): void {
    this.auth.user$
    .pipe(
      concatMap((user) =>
        // Use HttpClient to make the call
        this.http.get(
          encodeURI(`${this.url}/api/v2/users/${user.sub}`)
        )
      ),
      pluck<Object, Meta>('user_metadata'),
      take(1)
    )
    // tslint:disable-next-line: variable-name
    .subscribe(user_metadata => this._metadata.next(user_metadata));
  }
}
