import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useAuth } from '@/hooks/auth'
import { UserStats } from '@/components/CYOA/UserStats'

const Dashboard = observer(function dashboard({ props }) {
    const { user } = useAuth({ middleware: 'guest' })

    useEffect(() => {
        console.log('props')
        console.log(props)
    }, [])
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>
            <Head>
                <title>Laravel - Dashboard</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            Hey {user?.name}, you're logged in!
                        </div>
                        <UserStats />
                    </div>
                </div>
            </div>
        </AppLayout>
    )
})

export async function getServerSideProps() {
    return {
        props: {}, // will be passed to the page component as props
    }
}

export default Dashboard
