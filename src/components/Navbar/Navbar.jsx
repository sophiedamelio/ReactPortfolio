import "./Navbar.css"

import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Navbar() {
	const SmoothScroll = () => (
		<div style={{ marginLeft: "8vh" }}>
			<AnchorLink href='#projects' className="nav-link">Projects</AnchorLink>
			<AnchorLink href='#contact' className="nav-link">Contact</AnchorLink>
		</div >
	)

	return (
		<section id="navSection">
			<div id="menu-nav-links">
				<a href="/" id="title">Sophie Damelio</a>
				<SmoothScroll id="content" />
			</div>
		</section>
	)
}
