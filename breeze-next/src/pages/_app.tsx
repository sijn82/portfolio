
import { RootStoreProvider } from '@/providers/RootStoreProvider';
import { NextPage } from 'next';
import 'tailwindcss/tailwind.css'

function App({
    Component,
    pageProps,
  }: {
    Component: NextPage;
    pageProps: any;
  }) {
    return (
      <RootStoreProvider hydrationData={pageProps.hydrationData}>
        <Component {...pageProps} />;
      </RootStoreProvider>
    );
  }

export default App
