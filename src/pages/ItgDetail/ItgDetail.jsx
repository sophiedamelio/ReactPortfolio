import './ItgDetail.css'
import Itg from "../../components/Itg/Itg";
import Footer from "../../components/Footer/Footer"

import { Icon } from "semantic-ui-react"
import AnchorLink from 'react-anchor-link-smooth-scroll';



export default function ItgDetail() {

	const SmoothScroll = () => (
		<div style={{ marginLeft: "8vh" }}>
			<AnchorLink href='#itgDetail'><Icon alt="back-to-top-button" style={{ position: "fixed", right: "1.5vh", bottom: "2vh", color: "rgb(216, 123, 87)" }} name='arrow alternate circle up outline' size="large" /></AnchorLink>
		</div >
	)

	return (
		<div id="itgDetail">
			<div id="itgMenu">
				<a href="/"><Icon name="arrow left" size="big" id="backButton" /></a>
				<a href="/" id="siteTitle" className="all-nav-links">Sophie Damelio</a>
			</div>
			<SmoothScroll />
			<Itg />
			<Footer />
		</div>
	)
}