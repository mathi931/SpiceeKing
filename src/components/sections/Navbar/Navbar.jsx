import React from 'react';
import tw, { styled } from 'twin.macro';
import Logo from '../../elements/Logo/Logo.jsx';
import NavItems from './NavItems';

const Navbar = () => {
	return (
		<Container>
			<Logo />
			<NavItems />
		</Container>
	);
};

export default Navbar;

const Container = tw.div`
	w-full
	flex
	flex-row
	items-center
	justify-between
	lg:px-2
	shadow-xl
`;
