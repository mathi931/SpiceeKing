import React from 'react';
import tw from 'twin.macro';

const Title = ({ cTitle }) => {
	return (
		<Container>
			<Titl>{cTitle}</Titl>
			<Subtitle>shop</Subtitle>
		</Container>
	);
};
export default Title;

const Container = tw.div`absolute font-roboto text-2xl uppercase p-4 cursor-pointer flex flex-col items-center justify-center bg-gray-700 opacity-60`;
const Titl = tw.h2`text-white tracking-wider font-semibold`;
const Subtitle = tw.h3`text-gray-100 tracking-widest font-light`;
