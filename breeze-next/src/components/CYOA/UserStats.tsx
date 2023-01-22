import { useCYOAStore } from '@/providers/RootStoreProvider'
import { observer } from 'mobx-react-lite'

export const UserStats = observer(function UserStats() {
    const store = useCYOAStore()
    return (
        <div className="m-20">
            <div className="flex justify-center m-20">
                <p className="font-semibold text-lg">
                    Current Health: {store.userStats.health}{' '}
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <button
                    className="border-2 p-4 rounded-xl bg-green-400"
                    onClick={store.incrementHealth}>
                    Health Boost
                </button>
                <button
                    className="border-2 p-4 rounded-xl bg-red-400"
                    onClick={store.decrementHealth}>
                    Sacrifice Health
                </button>
            </div>
        </div>
    )
})
