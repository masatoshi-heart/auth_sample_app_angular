import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface Error {
  title: string;
  status: number;
}

export interface GlobalErrorState {
  errors: Error[];
}

export function createInitialState(): GlobalErrorState {
  return {
    errors: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'global-error' })
export class GlobalErrorStore extends Store<GlobalErrorState> {

  constructor() {
    super(createInitialState());
  }

}
