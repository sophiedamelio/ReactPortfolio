import React from 'react';
//import ReactDOM from 'react-dom';
//import AnchorLink from 'react-anchor-link-smooth-scroll';


import Navbar from '../../components/Navbar/Navbar'
import Projects from '../../components/Projects/Projects'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'

import './HomePage.css';

import { useState } from 'react'

import { Grid } from 'semantic-ui-react';

//to do:
// 1. mobile menu
// nav links need to be aligned on left with title
// 2. menu anchors desktop
// 3. background color full width on mobile and desktop
// 4. better font and weight for accessibility


export default function HomePage() {

	//const SmoothScroll = () => (
	//	<div>
	//		<AnchorLink href='#things'>Things</AnchorLink>
	//		<AnchorLink href='#stuff'>Stuff</AnchorLink>

	//		<section id='things'>
	//			<h2>Things</h2>
	//		</section>
	//		<section id='stuff'>
	//			<h2>Stuff</h2>
	//		</section>

	//		<Grid>
	//			<Navbar className="components" />
	//			{/*<AnchorLink href='#projects'>Projects</AnchorLink>*/}
	//			<About classname="components" />
	//			<Projects className="components" sophie={sophie} setSophie={setSophie} />
	//			<Footer classname="components" />
	//		</Grid>

	//	</div>
	//)

	//ReactDOM.render(
	//	<SmoothScroll />,
	//	document.getElementById('content')
	//)


	const [sophie, setSophie] = useState("https://i.imgur.com/P5KDK68.png")

	return (
		<div id="homePage">
			{/*<SmoothScroll id="content" />*/}
			<Grid>
				<Navbar className="components" />
				<About classname="components" />
				<Projects className="components" sophie={sophie} setSophie={setSophie} />
				<Footer classname="components" />
			</Grid>
		</div>
	)
	//ReactDOM.render(
	//	<SmoothScroll />,
	//	document.getElementById('content')
	//)
}