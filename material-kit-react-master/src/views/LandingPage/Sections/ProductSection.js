import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import PeopleIcon from "@material-ui/icons/People";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
	const classes = useStyles();
	return (
		<div className={classes.section}>
			<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={8}>
					<h2 className={classes.title}>Come Home</h2>
					<h5 className={classes.description}>
						We desire to be a church that you can call home. We understand the
						need of having a place to call home where your children can feel
						welcomed and accepted. A place where you can come and find rest in
						our Savior's arms, find joy in our worship, and find life in the
						word. We are called to pray for the Nations, Leaders of the World,
						our families, and Children. Showing the love of Jesus through our
						Missionary sponsorships, Street Outreach Ministry, and being a home
						church where everyone can find a place to belong. Our services are
						diverse with Spanish and English interpretation. Come visit us and
						see what we are working to accomplish for the Kingdom until the
						return of our Savior. Come and be part of our family our
						CASA.Founded 1983
					</h5>
				</GridItem>
			</GridContainer>
			<div>
				<GridContainer>
					<GridItem xs={12} sm={12} md={4}>
						<InfoArea
							title="Bilingual Services"
							description="Spanish and English services are offered for every Wednesday and Sunday Service"
							icon={PeopleIcon}
							iconColor="info"
							vertical
						/>
					</GridItem>
					<GridItem xs={12} sm={12} md={4}>
						<InfoArea
							title="Full Gospel"
							description="Full Gospel teachings non denomination"
							icon={FavoriteIcon}
							iconColor="success"
							vertical
						/>
					</GridItem>
					<GridItem xs={12} sm={12} md={4}>
						<InfoArea
							title="Mission Outreach"
							description="We maintain presence and provide help throughout our community monthly"
							icon={SentimentSatisfiedAltIcon}
							iconColor="danger"
							vertical
						/>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	);
}
