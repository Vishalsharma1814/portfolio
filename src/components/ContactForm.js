import emailjs from "emailjs-com";
import React, { useState } from "react";
import Loader from "react-loader-spinner";

export default function ContactUs() {
	const message = () => {
		return <h1 style={{ background: "yellow" }}>Message sent successfully!</h1>;
	};
	const [post, setPost] = useState(null);
	function sendEmail(e) {
		setPost(message);
		e.preventDefault();

		emailjs
			.sendForm(
				"service_5ah39es",
				"template_hbvkzo4",
				e.target,
				"user_Jb6iJfYSP0RlMFKu5r8IE"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	}

	return (
		<div
			className="contactbg"
			style={{ textAlign: "center", justifyContent: "center", display: "flex" }}
		>
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
				timeout={50}
			/>
			<form onSubmit={sendEmail} className="w-full max-w-4xl py-5">
				{post}
				<h1 style={{ fontWeight: "bold", color: "rgba(255, 255, 255, 0.9)" }}>
					GET IN TOUCH
				</h1>
				<div className="md:flex md:items-center mb-6 ">
					<div className="md:w-full">
						<input
							required
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id="inline-full-name"
							type="text"
							placeholder="Name"
						/>
					</div>
				</div>
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-full">
						<input
							required
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id="inline-full-name"
							type="email"
							name="email"
							placeholder="Email"
						/>
					</div>
				</div>
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-full">
						<input
							required
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id="inline-full-name"
							type="text"
							name="subject"
							placeholder="Subject"
						/>
					</div>
				</div>
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-full">
						<textarea
							required
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id=""
							cols="30"
							rows="8"
							name="message"
							placeholder="Type your message..."
						></textarea>
					</div>
				</div>
				<div className="md:flex md:items-center">
					<div className="md:w-full">
						<input
							style={{ fontSize: " 1.2rem" }}
							type="submit"
							className="shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-6 rounded"
							value="Send Message"
						></input>
					</div>
				</div>
			</form>
		</div>
	);
}
