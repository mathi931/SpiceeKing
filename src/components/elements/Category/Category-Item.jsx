import React from 'react';
import tw, { styled } from 'twin.macro';
import Title from './Category-Title';

const Container = styled.div(({ grow, Iurl }) => [
	`background-image: url(${Iurl})`,
	tw`shadow-sm rounded bg-cover bg-center p-12 bg-no-repeat w-80 h-80 flex-grow max-w-lg flex items-center justify-center`,
	grow && tw` md:max-w-full lg:h-96`,
]);

const Category = ({ grow, cTitle, Iurl }) => {
	return (
		<Container grow={grow} style={{ backgroundImage: `url(${Iurl})` }}>
			<Title cTitle={cTitle} />
		</Container>
	);
};
export default Category;
