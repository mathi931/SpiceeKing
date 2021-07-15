import React, { Component } from 'react';
import tw from 'twin.macro';
import Category from '../../elements/Category/Category-Item';
import CategoryData from '../../../data/CategoryData.json';

class Directory extends Component {
	constructor() {
		super();

		this.state = {
			CategoryData: CategoryData,
		};
	}

	render() {
		return (
			<Container>
				<Category cTitle='grass' />
				<Category cTitle='grass' />
				<Category cTitle='grass' />
				<Category cTitle='grass' grow={true} />
				<Category cTitle='grass' grow={true} />
			</Container>
		);
	}
}
export default Directory;

const Container = tw.div`flex gap-2 flex-wrap bg-gray-100 p-4 justify-center md:gap-4`;
