import Link from 'next/link';

export function SideBar() {
	return (
		<aside className="flex h-full flex-col rounded-md bg-white p-4">
			<Link href="/">Dashboard</Link>
			<Link href="/projects">Projects</Link>
		</aside>
	);
}
