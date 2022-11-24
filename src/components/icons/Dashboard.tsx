interface Props {
	size?: string;
}

export function Dashboard({ size = '40' }: Props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 40 40">
			<path
				fill="currentColor"
				d="M21.375 15.833V5H35v10.833ZM5 21.375V5h13.625v16.375ZM21.375 35V18.625H35V35ZM5 35V24.167h13.625V35Zm2.792-16.375h8.041V7.792H7.792Zm16.375 13.583h8.041V21.375h-8.041Zm0-19.166h8.041v-5.25h-8.041ZM7.792 32.208h8.041v-5.25H7.792Zm8.041-13.583Zm8.334-5.583Zm0 8.333Zm-8.334 5.583Z"
			/>
		</svg>
	);
}
