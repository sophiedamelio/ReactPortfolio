import "./Navbar.css"
import { Header, Menu } from 'semantic-ui-react';
import React, { useState } from "react";

import PropTypes from 'prop-types';
//import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';




export default function Navbar() {

	function TabPanel(props) {
		const { children, value, index, ...other } = props;

		return (
			<div
				role="tabpanel"
				hidden={value !== index}
				id={`full-width-tabpanel-${index}`}
				aria-labelledby={`full-width-tab-${index}`}
				{...other}
			>
				{value === index && (
					<Box sx={{ p: 4 }}>
						<Typography>{children}</Typography>
					</Box>
				)}
			</div>
		);
	}

	TabPanel.propTypes = {
		children: PropTypes.node,
		index: PropTypes.number.isRequired,
		value: PropTypes.number.isRequired,
	};

	function a11yProps(index) {
		return {
			id: `full-width-tab-${index}`,
			'aria-controls': `full-width-tabpanel-${index}`,
		};
	}

	//function FullWidthTabs() {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};


	const [activeItem, setActiveItem] = useState({ activeItem: 'bio' });

	function handleItemClick(e, tabName) {
		// set active tab to be a color for testing here?
		setActiveItem({ activeItem: tabName });
	}
	//}

	//const { activeItem } = this.state
	//activeItem = activeItem;

	//const { activeItem } = this.state

	//<Header id="all-nav-links">
	//<>
	//<Box id="menu">
	{/*<AppBar position="static" id="appBar" style={{ fontFamily: "OPTIAmway" }}>
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="secondary"
					textColor="inherit"
					variant="fullWidth"
					aria-label="full width tabs example"
				>
					<Tab label="About" {...a11yProps(0)} />
					<Tab label="Certifications" {...a11yProps(1)} />
					<Tab label="Projects" {...a11yProps(2)} />
					<Tab label="Contact" {...a11yProps(3)} />
				</Tabs>
			</AppBar>*/}
	{/*<SwipeableViews
						axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
						index={value}
						onChangeIndex={handleChangeIndex}
					>*/}
	//	<TabPanel value={value} index={0} dir={theme.direction}>
	//		About
	//	</TabPanel>
	//	<TabPanel value={value} index={1} dir={theme.direction}>
	//		Certifications
	//	</TabPanel>
	//	<TabPanel value={value} index={2} dir={theme.direction}>
	//		Projects
	//	</TabPanel>
	//	<TabPanel value={value} index={3} dir={theme.direction}>
	//		Contact
	//	</TabPanel>
	//	{/*</SwipeableViews>*/}
	//</Box>
	//<Menu tabular>
	//	<Menu.Item
	//		name='bio'
	//		active={activeItem === 'bio'}
	//		onClick={handleItemClick}
	//	/>
	//	<Menu.Item
	//		name='photos'
	//		active={activeItem === 'photos'}
	//		onClick={() => { handleItemClick(); }}
	//	/>
	//</Menu>

	return (
		<div id="all-nav-links">
			<a href="/portfolio" id="title">Sophie Damelio</a>
			<div id="menu-nav-links">
				<a href="/about" className="nav-link">About</a>
				<a href="/projects" className="nav-link">Projects</a>
				<a href="/contact" className="nav-link">Contact</a>
			</div>
		</div>
	)
}
