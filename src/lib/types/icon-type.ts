interface Props {
	size?: string;
	fill?: string;
}

export interface IconType {
	name: string;
	component: ({ size, fill }: Props) => JSX.Element;
}
