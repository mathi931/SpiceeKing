import React from 'react';
import tw, { styled } from 'twin.macro';
import Navbar from '../../sections/Navbar/Navbar';

const ShopPage = () => {
	return (
		<Container>
			<Navbar />
			<div>SHOP PAGE</div>
		</Container>
	);
};
export default ShopPage;

const Container = tw.div`        
	flex
	flex-col
	w-full
	h-full
	items-center
	overflow-x-hidden`;