import React, { Component } from 'react';
import tw from 'twin.macro';
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
export default App;

const Container = tw.div`max-w-screen-xl w-full mx-auto h-full font-poppins`;
