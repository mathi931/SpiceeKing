import React, { Component } from 'react';
import tw from 'twin.macro';
import { Homepage, ShopPage, ContactPage } from './components/pages/Pages';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
	render() {
		return (
			<Container>
				<Switch>
					<Route exact path='/'> <Homepage /></Route>
					<Route path='/shop'> <ShopPage /></Route>
					<Route path='/contact'> <ContactPage /></Route>
				</Switch>
			</Container>
		);
	}
}
export default App;

const Container = tw.div`max-w-screen-xl w-full mx-auto h-full font-poppins`;
