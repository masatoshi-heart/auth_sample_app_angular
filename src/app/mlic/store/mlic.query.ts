import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Mlic } from '.';
import { MlicStore, MlicState } from './mlic.store';

@Injectable({ providedIn: 'root' })
export class MlicQuery extends QueryEntity<MlicState, Mlic> {

  constructor(protected store: MlicStore) {
    super(store);
  }

}
