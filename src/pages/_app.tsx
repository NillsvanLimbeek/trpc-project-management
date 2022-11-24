import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import '../styles/globals.css';

import { trpc } from '@/lib/utils/trpc';

import { SideBar } from '../components/SideBar';
import { Header } from '../components/Header';


const MyApp: AppType<{ session: Session | null }> = ({
	Component,
	pageProps: { session, ...pageProps }
}) => {
	return (
		<SessionProvider session={session}>
			<SideBar />

			<main className="w-full">
				<Header />
				<Component {...pageProps} />
			</main>

			<ReactQueryDevtools />
		</SessionProvider>
	);
};

export default trpc.withTRPC(MyApp);
