import React from 'react';
import tw, { styled } from 'twin.macro';
import Title from './Category-Title';

const Container = styled.div(({ grow }) => [
	tw`p-12 bg-gray-500 w-80 h-80 flex-grow max-w-lg flex items-center justify-center`,
	grow && tw` md:max-w-full lg:h-96`,
]);
const Category = ({ grow, cTitle, url }) => {
	return (
		<Container grow={grow}>
			<Title cTitle={cTitle} />
		</Container>
	);
};
export default Category;
