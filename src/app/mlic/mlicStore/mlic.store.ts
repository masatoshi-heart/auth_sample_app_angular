import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Mlic } from './mlic.model';

export interface MlicState extends EntityState<Mlic, string> {
  areMlicsLoaded: boolean;
}

export function createInitialState(): MlicState {
  return {
      areMlicsLoaded: false
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'mlic'
})
export class MlicStore extends EntityStore<MlicState> {

  constructor() {
    super(createInitialState());
  }

  loadMlics(mlics: Mlic[], areMlicsLoaded: boolean): void {
    this.set(mlics);
    this.update(state => ({
      ...state,
      areMlicsLoaded
    }));
  }

}
