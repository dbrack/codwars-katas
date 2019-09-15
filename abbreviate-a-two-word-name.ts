export const abbrevName = (name: string) => {
	return (
		name &&
		name.length &&
		name
			.split(' ')
			.map(n => n[0].trim().toUpperCase())
			.join('.')
	);
};
