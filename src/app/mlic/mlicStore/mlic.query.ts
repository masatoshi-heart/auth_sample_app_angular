import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { MlicStore, MlicState } from './mlic.store';

@Injectable({ providedIn: 'root' })
export class MlicQuery extends QueryEntity<MlicState> {

  selectAreMlicesLoaded$ = this.select(state => {
    return state.areMlicsLoaded;
  });

  constructor(protected store: MlicStore) {
    super(store);
  }

}
