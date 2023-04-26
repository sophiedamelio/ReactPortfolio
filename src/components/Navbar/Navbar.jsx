import "./Navbar.css"
import { Header, Menu } from 'semantic-ui-react';
import React, { useState } from "react";


export default function Navbar() {

	const [activeItem, setActiveItem] = useState({ activeItem: 'bio' });

	function handleItemClick(e, tabName) {
		// set active tab to be a color for testing here?
		setActiveItem({ activeItem: tabName });
	}

	//const { activeItem } = this.state
	//activeItem = activeItem;

	//const { activeItem } = this.state

	return (
		//<Header id="all-nav-links">
		<>
			<Menu tabular>
				<Menu.Item
					name='bio'
					active={activeItem === 'bio'}
					onClick={handleItemClick}
				/>
				<Menu.Item
					name='photos'
					active={activeItem === 'photos'}
					onClick={handleItemClick}
				/>
			</Menu>
			<div id="all-nav-links">
				<a href="/portfolio" id="title">Sophie Damelio</a>
				<div id="menu-nav-links">
					<a href="/about" className="nav-link">About</a>
					<a href="/projects" className="nav-link">Projects</a>
					<a href="/contact" className="nav-link">Contact</a>
				</div>
			</div>
		</>
		//{/*</Header>*/ }
	)
}