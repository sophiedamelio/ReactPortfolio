import { Grid, Image, Accordion, Icon } from 'semantic-ui-react'
import './Itg.css'

export default function Itg() {

	const panels = [
		{
			key: 'view-more-pages',
			title:
				'View more pages',
			content: [
				<Grid id="photoGrid" doubling columns={2}>
					{/* add breakpoint for mobile, so only one image shows per row */}
					<Grid.Row>
						<Grid.Column id="gridColumn">
							<Image src="https://i.imgur.com/6dGoGb1.jpg" alt="Third slide" size={"medium"} />
						</Grid.Column>
						<Grid.Column id="gridColumn">
							<Image src="https://i.imgur.com/doAsgK1.jpg" alt="Third slide" size={"medium"} />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column id="gridColumn">
							<Image src="https://i.imgur.com/2MvQylD.jpg" alt="Third slide" size={"medium"} />
						</Grid.Column>
						<Grid.Column id="gridColumn">
							<Image src="https://i.imgur.com/OeLb6Up.jpg" alt="Third slide" size={"medium"} />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column id="gridColumn">
							<Image src="https://i.imgur.com/AfXUQ8E.jpg" alt="Third slide" size={"medium"} />
						</Grid.Column>
						<Grid.Column id="gridColumn">
							<Image src="https://i.imgur.com/CB5NQa3.jpg" alt="Third slide" size={"medium"} />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column id="gridColumn">
							<Image src="https://i.imgur.com/9mBHFKt.jpg" alt="Third slide" size={"medium"} />
						</Grid.Column>
						<Grid.Column id="gridColumn">
							<Image src="https://i.imgur.com/lAqkpka.jpg" alt="Third slide" size={"medium"} />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column id="gridColumn">
							<Image src="https://i.imgur.com/lbs2mEB.jpg" alt="Third slide" size={"medium"} />
						</Grid.Column>
						<Grid.Column id="gridColumn">
							<Image src="https://i.imgur.com/lmzsSwF.jpg" alt="Third slide" size={"medium"} />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column id="gridColumn">
							<Image src="https://i.imgur.com/pNELKQJ.jpg" alt="Third slide" size={"medium"} />
						</Grid.Column>
						<Grid.Column id="gridColumn">
							<Image src="https://i.imgur.com/e6QPKi8.png" alt="Third slide" size={"medium"} />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column id="gridColumn">
							<Image src="https://i.imgur.com/yxWTgsT.jpg" alt="Third slide" size={"medium"} />
						</Grid.Column>
						<Grid.Column id="gridColumn">
							<Image src="https://i.imgur.com/ifdhqwH.jpg" alt="Third slide" size={"medium"} />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column id="gridColumn">
							<Image src="https://i.imgur.com/uJgpJQb.jpg" alt="Third slide" size={"medium"} />
						</Grid.Column>
						<Grid.Column id="gridColumn">
							<Image src="https://i.imgur.com/czgMYjj.jpg" alt="Third slide" size={"medium"} />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column id="gridColumn">
							<Image src="https://i.imgur.com/QreTmcf.jpg" alt="Third slide" size={"medium"} />
						</Grid.Column>
					</Grid.Row>
				</Grid >
			]
		}
	]

	return (

		<div id="accordianContainer">
			<h2 style={{ fontFamily: "OPTIAmway" }}>Ideas To Go Website Build</h2>
			<p>I developed and designed this website for Ideas To Go from May 2021 - Oct 2021 as a freelance contractor. I no longer maintain the website, the contract ended upon completion of the build. It is hosted on Squarespace, and uses a custom theme I created. I was provided design assets including logos, fonts, and a color pallet. I worked with their Designer <a href="https://francesbarra.wixsite.com/mysite" target="blank" style={{ color: "rgb(110, 87, 91)", textDecoration: "underline" }}>Frances Barra</a> to implement page designs, and picked up so many skills throughout our communication as well as technical exposure. I learned a lot from the task of recreating detailed designs for the live website.</p>
			<p>I developed the entire website of 40+ pages, and utilized a combination of built in Squarespace features and my own custom CSS. The process of this project brought me many new ways of approaching a problem, and I learned the most from utilizing flexibility and researching and understanding process before delving deep into it. The most technical aspects of the website that I implemented are the angled and responsive page transitions, the custom CTA buttons, the contact form (embed from their CRM), and the responsive images.</p>
			{/* add breakpoint for mobile, so only one image shows per row */}
			<Grid id="photoGrid" doubling columns={2}>
				<Grid.Row>
					<Grid.Column id="gridColumn">
						<Image src="https://i.imgur.com/gK6tkHZ.jpg" alt="First slide" size={"medium"} />
					</Grid.Column>
					<Grid.Column id="gridColumn">
						<Image src="https://i.imgur.com/UIfSHC1.jpg" alt="Second slide" size={"medium"} />
					</Grid.Column>
					<Grid.Column id="gridColumn">
						<Image src="https://i.imgur.com/A9rRfgg.jpg" alt="Third slide" size={"medium"} />
					</Grid.Column>
					<Grid.Column id="gridColumn">
						<Image src="https://i.imgur.com/1z0NPZI.jpg" alt="Third slide" size={"medium"} />
					</Grid.Column>
				</Grid.Row>

				{/*<img class="d-block w-100" src="https://i.imgur.com/6dGoGb1.jpg" alt="Third slide" />
					<img class="d-block w-100" src="https://i.imgur.com/doAsgK1.jpg" alt="Third slide" />
					<img class="d-block w-100" src="https://i.imgur.com/2MvQylD.jpg" alt="Third slide" />
					<img class="d-block w-100" src="https://i.imgur.com/OeLb6Up.jpg" alt="Third slide" />
					<img class="d-block w-100" src="https://i.imgur.com/AfXUQ8E.jpg" alt="Third slide" />
					<img class="d-block w-100" src="https://i.imgur.com/CB5NQa3.jpg" alt="Third slide" />
					<img class="d-block w-100" src="https://i.imgur.com/9mBHFKt.jpg" alt="Third slide" />
					<img class="d-block w-100" src="https://i.imgur.com/lAqkpka.jpg" alt="Third slide" />
					<img class="d-block w-100" src="https://i.imgur.com/lbs2mEB.jpg" alt="Third slide" />
					<img class="d-block w-100" src="https://i.imgur.com/lmzsSwF.jpg" alt="Third slide" />
					<img class="d-block w-100" src="https://i.imgur.com/pNELKQJ.jpg" alt="Third slide" />
					<img class="d-block w-100" src="https://i.imgur.com/e6QPKi8.png" alt="Third slide" />
					<img class="d-block w-100" src="https://i.imgur.com/yxWTgsT.jpg" alt="Third slide" />
					<img class="d-block w-100" src="https://i.imgur.com/ifdhqwH.jpg" alt="Third slide" />
					<img class="d-block w-100" src="https://i.imgur.com/uJgpJQb.jpg" alt="Third slide" />
					<img class="d-block w-100" src="https://i.imgur.com/czgMYjj.jpg" alt="Third slide" />
					<img class="d-block w-100" src="https://i.imgur.com/QreTmcf.jpg" alt="Third slide" />*/}
			</Grid>
			<Accordion defaultActiveIndex={1} panels={panels} style={{ marginTop: "5vh", marginBottom: "5vh" }} id="activetitle" />
		</div>
	)
}