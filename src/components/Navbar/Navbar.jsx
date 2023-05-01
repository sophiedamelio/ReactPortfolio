import "./Navbar.css"
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default function Navbar() {
	const SmoothScroll = () => (
		<div>
			<AnchorLink href='#about' className="nav-link">About</AnchorLink>
			<AnchorLink href='#projects' className="nav-link">Projects</AnchorLink>
			<AnchorLink href='#contact' className="nav-link">Contact</AnchorLink>
		</div >
	)

	return (
		<div id="navSection">
			<a href="/" id="title">Sophie Damelio</a>
			<div id="all-nav-links">
				<div id="menu-nav-links">
					<SmoothScroll id="content" />
				</div>
			</div>
		</div>
	)
}
