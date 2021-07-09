import React, { useEffect } from "react";
import image from "../Homebg.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import Loader from "react-loader-spinner";

const Home = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<main>
			<Loader
				style={{
					position: "absolute",
					zIndex: "15",
					top: "50%",
					left: "50%",
					margin: "-50px 0 0 -80px",
				}}
				type="Puff"
				color="#00BFFF"
				height={100}
				width={100}
				timeout={100}
			/>
			<img
				src={image}
				alt="home img"
				className="absolute boject-cover w-full h-full"
			/>
			<section
				data-aos="zoom-in"
				data-aos-easing="linear"
				className="relative flex justify-center min-h-screen pt-12 lg:pt-40 pc-8"
			>
				<h1 className=" text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
					Hello, I'm Vishal Sharma
				</h1>
			</section>
		</main>
	);
};

export default Home;
