import React from 'react';
import tw, { styled } from 'twin.macro';
import Navbar from '../../sections/Navbar/Navbar';

const ContactPage = () => {
	return (
		<Container>
			<Navbar />
			<div>CONTACT PAGE</div>
		</Container>
	);
};
export default ContactPage;

const Container = tw.div`        
	flex
	flex-col
	w-full
	h-full
	items-center
	overflow-x-hidden`;
