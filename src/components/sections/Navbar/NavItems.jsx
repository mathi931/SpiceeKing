import React from 'react';
import tw, { styled, css } from 'twin.macro';
import { slide as Burger } from 'react-burger-menu';
import burgerStyle from './burgerStyle';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../responsive';
import { Router, Link, Switch } from 'react-router-dom';

const NavItems = () => {
	const mobileView = useMediaQuery({ maxWidth: SCREENS.sm });

	if (mobileView) {
		return (
			<Burger right styles={burgerStyle}>
				<Container>
					<NavItem mobile><Link to="/">home</Link></NavItem>
					<NavItem mobile><Link to='/shop' >shop</Link></NavItem>
					<NavItem mobile><Link to='/contact'>contact</Link></NavItem>
				</Container>
			</Burger>
		);
	}
	return (
		<Container>
			<NavItem><Link to="/">home</Link></NavItem>
			<NavItem ><Link to='/shop' >shop</Link></NavItem>
			<NavItem ><Link to='/contact'>contact</Link></NavItem>
		</Container>
	);
};
export default NavItems;

//components
const Container = styled.ul`
	${tw`
        flex
        list-none
  `};
`;

const NavItem = styled.li`
	${tw`
        p-5
        text-sm
        md:text-base
        text-spicy-gray
        font-medium
        cursor-pointer
        transition
        duration-500
        ease-in-out
		uppercase
        hover:text-white
        hover:bg-spicy-gray
    `};
	${({ mobile }) =>
		mobile &&
		css`
			${tw`
            text-white
            text-xl
            mb-1
            p-4
            text-center
            bg-gray-600
            bg-opacity-25 
            `};
		`};
`;
