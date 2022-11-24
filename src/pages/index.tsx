import { type NextPage } from 'next';
import Head from 'next/head';

import { trpc } from '../lib/utils/trpc';

const Home: NextPage = () => {
	// const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

	return <div>Main</div>;
};

export default Home;
