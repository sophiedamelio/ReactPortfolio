import React from 'react';

import Navbar from '../../components/Navbar/Navbar'
import Projects from '../../components/Projects/Projects'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'

import './HomePage.css';

import { Grid } from 'semantic-ui-react';

//to do:

// 7. spacing on cards (?)
// 7.5 write new blurb (from work?)
// 8. /* 1500px + needs work on: cert image size, 


// test for:
// 6. ITG detail links to top of page


// icebox - sticky button lowe rright corner (?) for back to top

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