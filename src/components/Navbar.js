import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
	return (
		<header style={{ backgroundColor: "#47597E" }}>
			<div className="container mx-auto flex justify-between">
				<nav className="flex">
					<NavLink
						to="/"
						exact
						activeClassName="text-white"
						className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-yellow-400 text-4xl font-bold cursive1 tracking-widest"
					>
						Home
					</NavLink>
					<NavLink
						to="/post"
						activeClassName="text-white bg-blue-900"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-yellow-400"
					>
						Blog Post
					</NavLink>
					<NavLink
						to="/project"
						activeClassName="text-white bg-blue-900"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-yellow-400"
					>
						Projects
					</NavLink>
					<NavLink
						to="/about"
						activeClassName="text-white bg-blue-900"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-yellow-400"
					>
						About Me
					</NavLink>
					<a
						href="https://drive.google.com/file/d/1EMaZxbmpr41fE9wEuNVH3R63e9iEbl15/view?usp=sharing"
						activeClassName="text-white bg-blue-900"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-yellow-400"
					>
						Resume
					</a>
					<NavLink
						to="/contact"
						activeClassName="text-white bg-blue-900"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-yellow-400"
					>
						Contact
					</NavLink>
				</nav>
				<div className="inline-flex py-3 px-3 my-6">
					<SocialIcon
						url="https://twitter.com/VishalS94607698"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 35, width: 35 }}
					/>
					<SocialIcon
						url="https://www.linkedin.com/in/vishal-sharma-3538a51b0"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 35, width: 35 }}
					/>
					<SocialIcon
						url="https://www.instagram.com/vishal_sharma.14/"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 35, width: 35 }}
					/>
					<SocialIcon
						url="https://github.com/Vishalsharma1814"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 35, width: 35 }}
					/>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
