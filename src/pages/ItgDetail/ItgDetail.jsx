import Itg from "../../components/Itg/Itg";
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar";

import './ItgDetail.css'


export default function ItgDetail() {
	return (
		<div id="itgDetail">
			{/*<Navbar />*/}
			<a href="/" id="title" className="all-nav-links">Sophie Damelio</a>
			<Itg />
			<Footer />
		</div>
	)
}