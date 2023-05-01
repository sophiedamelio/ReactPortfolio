import "./Navbar.css"
import { Header, Menu } from 'semantic-ui-react';
import React, { useState } from "react";

import AnchorLink from 'react-anchor-link-smooth-scroll';

import PropTypes from 'prop-types';
//import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';




export default function Navbar() {
	const SmoothScroll = () => (
		<div>
			<AnchorLink href='#about' className="nav-link">About</AnchorLink>
			<AnchorLink href='#projects' className="nav-link">Projects</AnchorLink>
			<AnchorLink href='#contact' className="nav-link">Contact</AnchorLink>

			{/*<section id='things'>
				<h2>Things</h2>
			</section>
			<section id='stuff'>
				<h2>Stuff</h2>
			</section>*/}

			{/*<a id="about" className="nav-link">About</a>
			<a id="projects" className="nav-link">Projects</a>
			<a id="contact" className="nav-link">Contact</a>*/}

		</div >
	)

	return (
		<div id="all-nav-links">
			<a href="/portfolio" id="title">Sophie Damelio</a>
			<div id="menu-nav-links">
				<SmoothScroll id="content" />
				{/*<a href="/about" className="nav-link">About</a>
				<a href="/projects" className="nav-link">Projects</a>
				<a href="/contact" className="nav-link">Contact</a>*/}
			</div>
		</div>
	)
}
