import React from 'react';
import tw, { styled } from 'twin.macro';

const ProductGrid = () => {
	return (
		<Container>
			<Card />
			<Card />
			<Card />
			<Card grow={true} />
			<Card grow={true} />
		</Container>
	);
};
export default ProductGrid;


const Container = tw.div`flex gap-2 flex-wrap bg-gray-100 p-4 justify-center md:gap-4`;

const Card = styled.div(({ grow }) => [
    tw`p-12 bg-blue-300 w-80 h-80 flex-grow max-w-lg `,
	grow && tw` md:max-w-full lg:h-96`,
]);
