import React from 'react';
import tw, { styled } from 'twin.macro';
import Directory from '../../sections/Directory/Directory';
import Navbar from '../../sections/Navbar/Navbar';

const HomePage = () => {
	return (
		<Container>
			<Navbar />
			<Directory />
		</Container>
	);
};
export default HomePage;

const Container = tw.div`        
	flex
	flex-col
	w-full
	h-full
	items-center
	overflow-x-hidden`;
