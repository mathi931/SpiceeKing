import React, { Component } from 'react';
import tw, { styled } from 'twin.macro';

class App extends Component {
	render() {
		return (
			<Container>
				<InnerContainer>
					<Wrapper>
						<Card />
						<Card />
						<Card />
						<Card grow={true}/>
						<Card grow={true}/>
					</Wrapper>
				</InnerContainer>
			</Container>
		);
	}
}

const Wrapper = tw.div`flex gap-2 flex-wrap bg-gray-100 p-4 justify-center md:gap-4`;

const Card = styled.div(({ grow }) => [
	tw`p-12 bg-blue-300 w-80 h-80 flex-grow max-w-lg `,
	grow && tw` md:max-w-full lg:h-96`,
]);

const Container = tw.div`h-full w-full font-poppins`;

const InnerContainer = tw.div`max-w-screen-xl w-full mx-auto`;

export default App;
