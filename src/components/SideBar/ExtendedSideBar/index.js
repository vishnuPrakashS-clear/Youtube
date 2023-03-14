import React from 'react';
import { Link } from 'react-router-dom';
import sideBar from '../../../Data/sideBar';

const ExtendedSideBar = (context) => {
	const { setState, state } = context;

	return <div className="sideBar">
		{sideBar.map((category, i) =>
			<Link
				to={ `/${ category.text === 'Home' ? '' : category.text }` }
				style={ { textDecoration: 'none', color: 'black' } }
				Key={ i }
				className="sideBar_category"
				onClick={ () => setState({
					...state,
					selectedText: category.text,
				}) }
			>
				<span className="sideBar_icon">{category.icon}</span>
				<span className="sideBar_text">{category.text}</span>
			</Link>)}
	</div>;
};

export default ExtendedSideBar;
