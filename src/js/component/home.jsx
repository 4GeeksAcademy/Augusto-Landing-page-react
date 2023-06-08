import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar.jsx";
import { Header } from "./Header.jsx";
import { CardList } from "./CardList.jsx";
import { Footer } from "./Footer.jsx";
import { Card } from "./Card.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Header></Header>
			<CardList></CardList>
			<Footer></Footer>
			<Card></Card>
		</div>
	);
};

export default Home;
