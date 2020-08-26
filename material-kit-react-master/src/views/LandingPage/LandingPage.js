import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
	const classes = useStyles();
	const { ...rest } = props;
	return (
		<div>
			<Header
				color="transparent"
				routes={dashboardRoutes}
				brand="House of Prayer"
				rightLinks={<HeaderLinks />}
				fixed
				changeColorOnScroll={{
					height: 400,
					color: "blue",
				}}
				{...rest}
			/>
			<Parallax filter image={require("assets/img/frontOfTheChurch.png")}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={12} md={6}>
							<h1 className={classes.title}>House of Prayer</h1>
							<h4>
								We are a Full Gospel Bilingual Church that offers passionate
								praise and worship and great teachings for the family.
							</h4>
							<br />
							<Button
								color="info"
								size="lg"
								href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fas fa-play" />
								Watch our latest sermon
							</Button>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.container}>
					<ProductSection />
					<TeamSection />
				</div>
			</div>
			<Footer />
		</div>
	);
}
