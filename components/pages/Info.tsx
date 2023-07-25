import { ExperienceItem } from "@/lib/types";
import ExperienceCard from "../ExperienceCard";

const experience: ExperienceItem[] = [
	{
		company: "Netset AB",
		title: "Backend Developer",
		fromDate: "2022",
		toDate: "Present",
		description: [
			"Develop, test and deploy new features.",
			"Communicate with clients on a daily basis.",
		],
		techStack: ["Java", "MSSQL", "Elasticsearch", "Linux"],
	},
	{
		company: "WeKnowIt AB",
		title: "Fullstack consultant",
		fromDate: "2021",
		toDate: "2022",
		description: [
			"Write modern and maintanable code for a diverse set of clients.",
			"Interview and onboard interns/newly hired developers.",
		],
		techStack: ["React", "NodeJs", "GCloud", "TypeScript"],
	},
	{
		company: "Fortnox AB",
		title: "Bachelor Thesis",
		fromDate: "2021",
		toDate: "2021",
		description: [
			"Developed tools using Java that gathered data about internal processes and visualized it using React.",
		],
		techStack: ["Java", "React", "Hibernate", "MySql"],
	},
];

export default function Info() {
	return (
		<section
			id="#info"
			className="h-screen w-full flex snap-start bg-background"
		>
			<div className="container h-screen w-full flex flex-col sm:items-center">
				<h1 className="text-4xl mt-20 mb-2 text-center">Experience</h1>
				<div className="flex flex-col overflow-y-scroll no-scrollbar max-h-[75%] sm:w-3/4 text-lg md:text-xl lg:text-2xl">
					{experience.map((experience) => (
						<ExperienceCard
							key={experience.company}
							props={{
								company: experience.company,
								title: experience.title,
								fromDate: experience.fromDate,
								toDate: experience.toDate,
								description: experience.description,
								techStack: experience.techStack,
							}}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
