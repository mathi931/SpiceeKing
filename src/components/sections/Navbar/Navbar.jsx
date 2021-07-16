import React from 'react';
import tw from 'twin.macro';
import Logo from '../../elements/Logo/Logo.jsx';

const Navbar = () => {
	return (
		<Container>
			<Logo />
		</Container>
	);
};

export default Navbar;

const Container = tw.div``;
