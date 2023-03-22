import React from "react";
import AboutMe from "./components/about-me";
import { aboutMe, skills, achievements } from "./data/page-data";
import Achievments from "./components/achievements";

const page = () => {
	return (
		<div>
			<AboutMe data={aboutMe} skills={skills} />
			<Achievments data={achievements} />
		</div>
	);
};

export default page;