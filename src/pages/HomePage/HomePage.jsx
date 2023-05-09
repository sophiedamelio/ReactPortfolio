import React, { createRef } from 'react';

import Navbar from '../../components/Navbar/Navbar'
import Projects from '../../components/Projects/Projects'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'

import AnchorLink from 'react-anchor-link-smooth-scroll';


import './HomePage.css';

import { Grid, Icon } from 'semantic-ui-react';

import { Routes, Route } from "react-router-dom";

//to do:

// tab title to Sophie Damelio
// clean up imports and comments
// once live, change readme for custom css in github to link to new website


// test for:
// 6. ITG detail links to top of page


export default function HomePage() {

	const SmoothScroll = () => (
		<div style={{ marginLeft: "8vh" }}>
			{/*<a href="/">
				<Icon style={{ paddingTop: "1vh", position: "fixed", right: "2vh", bottom: "2vh" }} name='arrow alternate circle up outline' size="large" />
			</a>*/}
			<AnchorLink href='#homePage'><Icon alt="back-to-top-button" style={{ position: "fixed", right: "1.5vh", bottom: "2vh", color: "rgb(216, 123, 87)" }} name='arrow alternate circle up outline' size="large" /></AnchorLink>
		</div >
	)

	return (
		<>
			<div id="homePage">
				<Grid>
					{/*<a href="/">
						<Icon style={{ paddingTop: "1vh", position: "fixed", right: "2vh", bottom: "2vh" }} name='arrow alternate circle up outline' size="large" />
					</a>*/}
					<SmoothScroll />
					<Navbar className="components" />
					<About classname="components" />
					<Projects className="components" />
					<Footer classname="components" />
				</Grid>
			</div>
		</>
	)
}