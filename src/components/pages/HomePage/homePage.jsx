import React from 'react';
import tw from 'twin.macro';
import ProductGird from '../../sections/Directory/Directory';
import Navbar from '../../sections/Navbar/Navbar'; 

const HomePage = () => {
	return (
		<Container>
            <Navbar />
			<ProductGird />
		</Container>
	);
};

export default HomePage;

const Container = tw.div``;
