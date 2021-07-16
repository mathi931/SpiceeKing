import React from 'react';
import tw, { styled } from 'twin.macro';
import LogoImg from '../../../assets/spiceeLogo.png';

const Logo = () => {
	return (
		<div>
			<Container>
				<ImageC>
					<img src={LogoImg} alt='brand-logo' />
				</ImageC>
				<LogoText>SpiceeKing</LogoText>
			</Container>
		</div>
	);
};
export default Logo;

//components
const Container = styled.div`
	${tw`
        flex
        items-center
		m-2
		cursor-pointer
		text-spicy-yellow
		hover:text-spicy-orange
    `};
`;
const LogoText = styled.div`
	${tw`
        text-xl
        md:text-2xl
        font-bold
		px-1
    `}
`;

const ImageC = styled.div`
	width: auto;
	${tw`
        h-12
    `};
	img {
		width: auto;
		height: 100%;
	}
`;
