import { RootStore } from './RootStore'
import { makeAutoObservable, observable, runInAction, action } from 'mobx'
export class CYOAStore {
    root: RootStore
    inventory: any = {}
    userStats: any = {
        health: 20,
    }

    constructor(root: RootStore) {
        this.root = root
        makeAutoObservable(this)
    }

    incrementHealth = () => {
        runInAction(() => {
            this.userStats.health += 1
        })
    }

    decrementHealth = () => {
        runInAction(() => {
            this.userStats.health -= 1
        })
    }
}
