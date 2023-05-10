import './HomePage.css';
import Navbar from '../../components/Navbar/Navbar'
import Projects from '../../components/Projects/Projects'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'

import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Grid, Icon } from 'semantic-ui-react';


// make scroll button go away at top of page
// padding between certifications and projects is too large

// test for:
// ITG detail links to top of page
// once live, change readme for custom css in github to link to new website
// (^^ link is not working, issue with routing needs to be fixed)


export default function HomePage() {

	const SmoothScroll = () => (
		<div style={{ marginLeft: "8vh" }}>
			<AnchorLink href='#homePage'><Icon alt="back-to-top-button" style={{ position: "fixed", right: "1.5vh", bottom: "2vh", color: "rgb(216, 123, 87)" }} name='arrow alternate circle up outline' size="large" /></AnchorLink>
		</div >
	)

	return (
		<section>
			<div id="homePage">
				<Grid>
					<SmoothScroll />
					<Navbar className="components" />
					<About classname="components" />
					<Projects className="components" />
					<Footer classname="components" />
				</Grid>
			</div>
		</section>
	)
}