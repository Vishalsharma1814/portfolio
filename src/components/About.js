import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import { SocialIcon } from "react-social-icons";
import Loader from "react-loader-spinner";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

export default function About() {
	const [author, setAuthor] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "author"]{
        name,
        "bio": bio[0].children[0].text,
        "authorImage": image.asset->url
      }`
			)
			.then((data) => setAuthor(data[0]))
			.catch(console.error);
	}, []);

	if (!author)
		return (
			<Loader
				style={{
					position: "absolute",
					zIndex: "15",
					top: "50%",
					left: "50%",
					margin: "-50px 0 0 -100px",
				}}
				type="Puff"
				color="#00BFFF"
				height={100}
				width={100}
				timeout={3000}
			/>
		);

	return (
		<main className="relative svgbackground">
			<img
				style={{ height: "75vh" }}
				src="https://jessicaroots.com/wp-content/uploads/2018/03/portfolio-background-header.jpg"
				alt="background"
				className="absolute w-full"
			/>

			<div className="p-10 lg:pt-20 container mx-auto relative grid grid-cols-2 gap-8">
				<section
					style={{
						backgroundColor: "#FFF5FD",
						boxShadow: ` 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
					}}
					className="rounded-lg shadow-2xl lg:flex p-20"
				>
					<img
						style={{ borderRadius: "50%" }}
						src={urlFor(author.authorImage).url()}
						className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
						alt="Vishal"
					/>
					<div className="text-lg flex flex-col justify-center">
						<h1 className="cursive text-6xl text-black mb-4">
							Hey there. I'm <span className="text-black">{author.name}</span>
						</h1>
						<p className="text-black text-lg">{author.bio}</p>
					</div>
				</section>
				<section
					style={{
						backgroundColor: "#FFF5FD",
						textAlign: "center",
						boxShadow: ` 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
					}}
					className="rounded-lg shadow-2xl lg:flex flex-col p-20 postcontent"
				>
					<a
						className="hover:text-red-400"
						href="mailto:sharmavishal1442000@gmail.com"
					>
						sharmavishal1442000@gmail.com
					</a>
					<br />
					<a className="hover:text-red-400" href="tel:+91-790-638-6173">
						+91-790-638-6173
					</a>
					<br />
					<a
						className="hover:text-red-400"
						href="https://drive.google.com/file/d/15mGnKxHFlj-Fv6ka7tXrIAjqoFH9w-O7/view?usp=sharing"
					>
						Resume
					</a>
					<br />
					My socials 👇
					<div className="inline-flex justify-center px-3 my-6">
						<SocialIcon
							url="https://twitter.com/VishalS94607698"
							className="mr-4"
							target="_blank"
							fgColor="#fff"
							style={{ height: 50, width: 50 }}
						/>
						<SocialIcon
							url="https://www.linkedin.com/in/vishal-sharma-3538a51b0"
							className="mr-4"
							target="_blank"
							fgColor="#fff"
							style={{ height: 50, width: 50 }}
						/>
						<SocialIcon
							url="https://www.instagram.com/vishal_sharma.14/"
							className="mr-4"
							target="_blank"
							fgColor="#fff"
							style={{ height: 50, width: 50 }}
						/>
						<SocialIcon
							url="https://github.com/Vishalsharma1814"
							className="mr-4"
							target="_blank"
							fgColor="#fff"
							style={{ height: 50, width: 50 }}
						/>
					</div>
				</section>
			</div>

			<div class="grid grid-cols-1 px-60 gap-4">
				<section
					style={{
						backgroundColor: "#FFF5FD",
						textAlign: "center",
						boxShadow: ` 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
					}}
					className="rounded-lg shadow-2xl lg:flex flex-col p-20 postcontent"
				>
					<div className="grid grid-cols-2 px-10 py-10 gap-4">
						<div style={{ textAlign: "left" }}>Education</div>
						<div style={{ textAlign: "left" }}>
							<ul>
								<li>
									<span style={{ fontSize: "1.2rem" }}>
										Bachelor of Technology (B.Tech), IT{" "}
									</span>
									<div style={{ color: "gray", fontSize: "1.1rem" }}>
										Maharaja Surajmal Institute of Technology 2019 - 2022
									</div>
								</li>
								<br></br>
								<li>
									<span style={{ fontSize: "1.2rem" }}>
										Diploma, Electrical and Electronics Engineering
									</span>
									<div style={{ color: "gray", fontSize: "1.1rem" }}>
										Dayalbagh Educational Institute 2016-2019
									</div>
								</li>
								<br />
								<li>
									<span style={{ fontSize: "1.2rem" }}>Secondary (X)</span>
									<div style={{ color: "gray", fontSize: "1.1rem" }}>
										St. Andrews Sr. Sec. School (CBSE board) 2015-2016
									</div>
								</li>
							</ul>
						</div>
						<div style={{ textAlign: "left" }}>Internships</div>
						<div style={{ textAlign: "left" }}>
							<ul>
								<li>
									<span style={{ fontSize: "1.2rem" }}>Web Development</span>
									<div style={{ color: "gray", fontSize: "1.1rem" }}>
										Ivory Designs Private Limited (Virtual)
									</div>
								</li>
								<br />
								<li>
									<span style={{ fontSize: "1.2rem" }}>
										Campus Representative
									</span>
									<div style={{ color: "gray", fontSize: "1.1rem" }}>
										Ecell , IIM Calcutta
									</div>
								</li>
								<br />
								<li>
									<span style={{ fontSize: "1.2rem" }}>Campus Ambassador</span>
									<div style={{ color: "gray", fontSize: "1.1rem" }}>
										Managers Adda
									</div>
								</li>
								<br />
								<li>
									<span style={{ fontSize: "1.2rem" }}>Campus Ambassador</span>
									<div style={{ color: "gray", fontSize: "1.1rem" }}>
										NinthSem
									</div>
								</li>
								<br />
							</ul>
						</div>
						<div style={{ textAlign: "left" }}>Skills</div>
						<div style={{ textAlign: "left" }}>
							<ul>
								<li>
									<span style={{ fontSize: "1.2rem" }}>JavaScript</span>
									<div style={{ color: "gray", fontSize: "1.1rem" }}>
										Advanced
									</div>
								</li>
								<br />
								<li>
									<span style={{ fontSize: "1.2rem" }}>React</span>
									<div style={{ color: "gray", fontSize: "1.1rem" }}>
										Advanced
									</div>
								</li>
								<br />
								<li>
									<span style={{ fontSize: "1.2rem" }}>HTML</span>
									<div style={{ color: "gray", fontSize: "1.1rem" }}>
										Advanced
									</div>
								</li>
								<br />
								<li>
									<span style={{ fontSize: "1.2rem" }}>CSS</span>
									<div style={{ color: "gray", fontSize: "1.1rem" }}>
										Advanced
									</div>
								</li>
								<br />
								<li>
									<span style={{ fontSize: "1.2rem" }}>BootStrap</span>
									<div style={{ color: "gray", fontSize: "1.1rem" }}>
										Advanced
									</div>
								</li>
								<br />
								<li>
									<span style={{ fontSize: "1.2rem" }}>Nodejs</span>
									<div style={{ color: "gray", fontSize: "1.1rem" }}>
										Intermediate
									</div>
								</li>
								<br />
								<li>
									<span style={{ fontSize: "1.2rem" }}>Jquery</span>
									<div style={{ color: "gray", fontSize: "1.1rem" }}>
										Intermediate
									</div>
								</li>
								<br />
								<li>
									<span style={{ fontSize: "1.2rem" }}>MongoDB</span>
									<div style={{ color: "gray", fontSize: "1.1rem" }}>
										Intermediate
									</div>
								</li>
								<br />
								<li>
									<span style={{ fontSize: "1.2rem" }}>
										Data Scructures(C++)
									</span>
									<div style={{ color: "gray", fontSize: "1.1rem" }}>
										Advanced
									</div>
								</li>
								<br />
								<li>
									<span style={{ fontSize: "1.2rem" }}>Algorithms</span>
									<div style={{ color: "gray", fontSize: "1.1rem" }}>
										Intermediate
									</div>
								</li>
								<br />
								<li>
									<span style={{ fontSize: "1.2rem" }}>Github</span>
									<div style={{ color: "gray", fontSize: "1.1rem" }}>
										Advanced
									</div>
								</li>
								<br />
								<li>
									<span style={{ fontSize: "1.2rem" }}>Expressjs</span>
									<div style={{ color: "gray", fontSize: "1.1rem" }}>
										Advanced
									</div>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
