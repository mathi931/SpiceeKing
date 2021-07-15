import React, { Component } from 'react';
import tw, { styled } from 'twin.macro';
import { Homepage } from './components/pages/Pages';

class App extends Component {
	render() {
		return (
			<Container>
				<Homepage />
			</Container>
		);
	}
}

const Wrapper = tw.div`flex gap-2 flex-wrap bg-gray-100 p-4 justify-center md:gap-4`;

const Card = styled.div(({ grow }) => [
	tw`p-12 bg-blue-300 w-80 h-80 flex-grow max-w-lg `,
	grow && tw` md:max-w-full lg:h-96`,
]);

const Container = tw.div`max-w-screen-xl w-full mx-auto h-full font-poppins`;

export default App;
