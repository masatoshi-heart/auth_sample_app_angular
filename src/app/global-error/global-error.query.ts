import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { GlobalErrorStore, GlobalErrorState } from './global-error.store';

@Injectable({ providedIn: 'root' })
export class GlobalErrorQuery extends Query<GlobalErrorState> {

  constructor(protected store: GlobalErrorStore) {
    super(store);
  }

}
