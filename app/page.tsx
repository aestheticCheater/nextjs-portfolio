import React from "react";
import AboutMe from "./components/about-me";
import { aboutMe, skills, professionalData } from "./data/page-data";
import ProfessionalExperience from "./components/professional-experience";

const page = () => {
	return (
		<div>
			<AboutMe data={aboutMe} skills={skills} />
			<ProfessionalExperience data={professionalData} />
		</div>
	);
};

export default page;