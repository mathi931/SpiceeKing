import React from 'react';
import tw, { styled } from 'twin.macro';
import Title from './Category-Title';

const Container = styled.div(({ size }) => [
	tw`overflow-hidden bg-red-100 cursor-pointer shadow-sm rounded w-80 h-80 flex-grow max-w-lg flex items-center justify-center`,
	size === 'large' && tw` md:max-w-full lg:h-96`
]);

const BackGround = styled.div`
	${tw`transform transition ease-in-out duration-700 hover:scale-110 w-full h-full bg-cover bg-center`}
`;

const Category = ({ size, cTitle, Iurl }) => {
	return (
		<Container size={size}>
			<BackGround style={{ backgroundImage: `url(${Iurl})` }} />
			<Title cTitle={cTitle} />
		</Container>
	);
};
export default Category;
