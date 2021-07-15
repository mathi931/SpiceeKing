import React from 'react';
import tw from 'twin.macro';

const Title = ({ cTitle, bg }) => {
	return (
		<Container>
			<Titl>{cTitle}</Titl>
			<Subtitle>shop</Subtitle>
		</Container>
	);
};
export default Title;

const Container = tw.div`text-2xl uppercase p-12 cursor-pointer flex flex-col items-center justify-center bg-gray-700 opacity-60`;
const Titl = tw.h2`text-white font-semibold`;
const Subtitle = tw.h3`text-gray-100 tracking-wider font-light`;
