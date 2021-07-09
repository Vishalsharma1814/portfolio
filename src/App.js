import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
//import Aos from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import SinglePost from "./components/SinglePost";
import Project from "./components/Project";
import ContactUs from "./components/ContactForm";

function App() {
	// useEffect(() => {
	// 	Aos.init({ duration: 2000 });
	// }, []);
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route component={Home} path="/" exact />
				<Route component={About} path="/about" />
				<Route component={SinglePost} path="/post/:slug" />
				<Route component={Post} path="/post" />
				<Route component={Project} path="/project" />
				<Route component={ContactUs} path="/contact" />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
