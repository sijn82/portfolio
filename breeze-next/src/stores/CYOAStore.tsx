import { RootStore } from "./RootStore";
import {makeObservable, observable} from 'mobx'
export class CYOAStore {
    root: RootStore
    inventory: any = {}
    userStats:any = {}

    constructor(root: RootStore) {
        this.root = root
        makeObservable(this, {
            inventory: observable,
            userStats: observable
        })
    }
}