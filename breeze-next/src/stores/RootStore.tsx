import { CYOAStore } from "./CYOAStore";



export type RootStoreHydration = {
//   stopwatchStore?: CounterHydration;
};
export class RootStore {
  cyoaStore: CYOAStore;
//   sizeSwitcherStore: ReturnType<typeof sizeSwitcherStoreFactory>;

  constructor() {
    this.cyoaStore = new CYOAStore(this)
    // this.sizeSwitcherStore = sizeSwitcherStoreFactory(this);
  }

  hydrate(data: RootStoreHydration) {
    // if (data.stopwatchStore) {
    //   this.counterStore.hydrate(data.stopwatchStore);
    // }
  }
}