import Itg from "../../components/Itg/Itg";
import Footer from "../../components/Footer/Footer"

import './ItgDetail.css'

import { Icon } from "semantic-ui-react"


export default function ItgDetail() {
	return (
		<div id="itgDetail">
			<div id="itgMenu">
				<a href="/"><Icon name="arrow left" size="big" id="backButton" /></a>
				<a href="/" id="siteTitle" className="all-nav-links">Sophie Damelio</a>
			</div>
			<Itg />
			<Footer />
		</div>
	)
}