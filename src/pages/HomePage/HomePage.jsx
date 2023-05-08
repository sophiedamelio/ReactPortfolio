import React, { createRef } from 'react';

import Navbar from '../../components/Navbar/Navbar'
import Projects from '../../components/Projects/Projects'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'

import './HomePage.css';

import { Grid, Icon } from 'semantic-ui-react';

//to do:

// 7.5 write new blurb (from work?)


// test for:
// 6. ITG detail links to top of page


// icebox - sticky button lowe rright corner (?) for back to top


export default function HomePage() {

	return (
		<>
			<div id="homePage">
				<Grid>
					<Icon name='arrow alternate circle up outline' />
					<Navbar className="components" />
					<About classname="components" />
					<Projects className="components" />
					<Footer classname="components" />
				</Grid>
			</div>
		</>
	)
}