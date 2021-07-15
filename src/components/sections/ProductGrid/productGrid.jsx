import React from 'react';
import tw, { styled } from 'twin.macro';
import PgCard from '../../elements/ProductGridCard/PgCard';

const ProductGrid = () => {
	return (
		<Container>
			<PgCard />
			<PgCard />
			<PgCard />
			<PgCard grow={true} />
			<PgCard grow={true} />
		</Container>
	);
};
export default ProductGrid;

const Container = tw.div`flex gap-2 flex-wrap bg-gray-100 p-4 justify-center md:gap-4`;
