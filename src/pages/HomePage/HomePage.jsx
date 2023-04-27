import Navbar from '../../components/Navbar/Navbar'
import Projects from '../../components/Projects/Projects'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'

import './HomePage.css';

import { useState } from 'react'

import { Grid } from 'semantic-ui-react';

//to do:
// 1. mobile menu
// 2. menu anchors desktop
// 3. background color full width on mobile and desktop


export default function HomePage() {

	const [sophie, setSophie] = useState("https://i.imgur.com/P5KDK68.png")

	return (
		<div id="homePage">
			<Grid>
				<Navbar className="components" />
				<About />
				<Projects className="components" sophie={sophie} setSophie={setSophie} />
				<Footer />
			</Grid>
		</div>
	)
}