import { type NextPage } from 'next';

import { trpc } from '../../lib/utils/trpc';

const Projects: NextPage = () => {
	const { data } = trpc.example.goodbye.useQuery({ messsage: 'test' });

	return (
		<>
			<main>
				<h1>Projects</h1>
				<pre>{data?.message.messsage}</pre>
			</main>
		</>
	);
};

export default Projects;
