import React from 'react';

import Navbar from '../../components/Navbar/Navbar'
import Projects from '../../components/Projects/Projects'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'

import './HomePage.css';

import { Grid } from 'semantic-ui-react';

//to do:
// 1. mobile menu
// nav links need to be aligned on left with title
// 2. menu anchors desktop
// 3. background color full width on mobile and desktop
// 4. better font and weight for accessibility
// 5. ITG detail page for mobile
// 6. ITG detail links to bottom of page, make it go to top
// 7. {/* add breakpoint for mobile, so only one image shows per row */}
// 8. /* 1500px + needs work on just about everything, itg and home



export default function HomePage() {

	return (
		<div id="homePage">
			<Grid>
				<Navbar className="components" />
				<About classname="components" />
				<Projects className="components" />
				<Footer classname="components" />
			</Grid>
		</div>
	)
}