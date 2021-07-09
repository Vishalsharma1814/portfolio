import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import "../index.css";
import Loader from "react-loader-spinner";

export default function Project() {
	const [projectData, setProjectData] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "project"]{
        title,
        date,
        place,
        language,
        description,
        projectType,
        link,
        tags
      }`
			)
			.then((data) => setProjectData(data))
			.catch(console.error);
	}, []);
	if (!projectData)
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
		<main
			style={{ backgroundColor: "#E8F0F2" }}
			className="bg-green-100 min-h-screen p-12 "
		>
			<section className="container mx-auto">
				<h1
					style={{
						color: "black",
						textDecoration: "underline",
					}}
					className="text-5xl flex justify-center cursive"
				>
					My Projects
				</h1>
				<h2
					style={{ color: "black" }}
					className="text-lg text-gray-600 flex justify-center mb-12"
				>
					Welcome to my projects page!
				</h2>

				<section className="grid grid-cols-3 gap-8">
					{projectData &&
						projectData.map((project, index) => (
							<article
								style={{ background: "rgba(255,255,255,.9)" }}
								key={index}
								className="relative rounded-lg shadow-xl bg-white p-16"
							>
								<h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-7001">
									<a
										href={project.link}
										alt={project.title}
										target="_blank"
										rel="noopener noreferrer"
									>
										{project.title}
									</a>
								</h3>
								<div
									style={{ fontSize: "1rem", lineHeight: "1.8" }}
									className="text-gray-500 text-xs space-x-4"
								>
									<span>
										<strong className="font-bold">Finished on</strong>:{" "}
										{new Date(project.date).toLocaleDateString()}
									</span>
									<span>
										<strong className="font-bold">Company</strong>:{" "}
										{project.place}
									</span>
								</div>
								<div
									style={{ fontSize: "1rem", lineHeight: "1.8" }}
									className="text-gray-500 text-xs space-x-4"
								>
									<span>
										<strong className="font-bold">Type</strong>:{" "}
										{project.projectType}
									</span>
									<span>
										<strong className="font-bold">Skills utilized</strong>:{" "}
										{project.language}
									</span>
								</div>
								<p className="my-6 text-lg text-gray-700 leading-relaxed">
									{project.description}
								</p>
								<a
									href={project.link}
									rel="noopener noreferrer"
									target="_blank"
									className="text-red-500 font-bold hover:underline hover:text-red-400"
								>
									View The Project{" "}
									<span role="img" aria-label="right pointer">
										👉
									</span>
								</a>
							</article>
						))}
				</section>
			</section>
		</main>
	);
}
