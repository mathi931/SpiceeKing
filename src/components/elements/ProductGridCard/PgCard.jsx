import React from 'react';
import tw, { styled } from 'twin.macro';

const Card = styled.div(({ grow }) => [
	tw`p-12 bg-blue-300 w-80 h-80 flex-grow max-w-lg `,
	grow && tw` md:max-w-full lg:h-96`,
]);

export default Card;
