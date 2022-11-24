import { createElement } from 'react';

import { ICONS, type names } from './icons';

type Props = {
	name: typeof names[number];
	size?: string;
	fill?: string;
};

export const Icon = ({ name, size, fill }: Props) => {
	const findComponent = (name: string) => {
		const icon = ICONS.find((icon) => icon.name === name);

		if (!icon) throw new Error(`icon ${name} was not found`);

		return icon.component;
	};

	return createElement(findComponent(name), { size, fill });
};
