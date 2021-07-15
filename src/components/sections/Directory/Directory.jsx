import React, { Component } from 'react';
import tw from 'twin.macro';
import Category from '../../elements/Category/Category-Item';
import CategoryData from '../../../data/CategoryData.json';

class Directory extends Component {
	constructor() {
		super();

		this.state = {
			categories: CategoryData,
		};
	}

	render() {
		return (
			<Container>
				{this.state.categories.map((c) => {
					console.log(c);
					return(
					<Category
						key={c.id}
						cTitle={c.title}
						Iurl={c.url}
						grow={c.id > 3 ? true : false}
					/>
				)})}
			</Container>
		);
	}
}
export default Directory;

const Container = tw.div`flex gap-2 flex-wrap bg-gray-100 p-4 justify-center md:gap-4`;
