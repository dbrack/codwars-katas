export const decodeMorse = (morseCode: string) => {
	return (
		morseCode &&
		morseCode.length &&
		morseCode
			.trim()
			.split('   ')
			.map(word =>
				word
					.split(' ')
					.map(letter => MORSE_CODE[letter])
					.join('')
			)
			.join(' ')
	);
};
