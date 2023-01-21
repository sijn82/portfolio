import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Account from '@/components/Account/Account'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Laravel</title>
            </Head>

            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <Account />
                {/* <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
            {user ? (
                <Link
                    href="/dashboard"
                    className="ml-4 text-sm text-gray-700 underline">
                    Dashboard
                </Link>
            ) : (
                <>
                    <Link
                        href="/login"
                        className="text-sm text-gray-700 underline">
                        Login
                    </Link>

                    <Link
                        href="/register"
                        className="ml-4 text-sm text-gray-700 underline">
                        Register
                    </Link>
                </>
            )}
        </div> */}

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <h1> Front Page </h1>
                </div>
            </div>
        </>
    )
}
