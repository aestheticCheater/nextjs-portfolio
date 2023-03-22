import React from "react";

const Achievements = ({ data }) => {
	const { title, experiences } = data;
	return (
		<section>
			<h2 className='mb-6'> {title}</h2>
			<div className='flex flex-col gap-6'>
				{experiences.map(({ role,date, description, credentialId, current, score }) => (
					<div key={role} className='flex flex-col rounded-lg'>
						<span className={`h-2 ${current ? "bg-green" : "bg-grey"}`} />
						<div className='bg-grey-light p-6 drop-shadow-md'>
							<h3 className="font-bold">{role}</h3>
							<p className="font-bold mt-2">{date}</p>
							<p className='mt-2'>{description}</p>
							<a href={credentialId} className='mt-2'>{credentialId}</a>
							<p className="font-bold mt-2">{score}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Achievements;