import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Mlic } from './mlic.model';

export interface MlicState extends EntityState<Mlic> {
}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'mlic',
  resettable: true
})
export class MlicStore extends EntityStore<MlicState, Mlic> {

  constructor() {
    super();
  }

}
