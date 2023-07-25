import { ExperienceItem } from "@/lib/types";
import { Badge } from "./ui/badge";

interface ExperienceProps {
	props: ExperienceItem;
}

export default function ExperienceCard({ props }: ExperienceProps) {
	return (
		<div className="flex flex-col w-full mt-6 lg:mt-24">
			<p className="font-bold">
				{props.company}, {props.title}
			</p>
			<div className="border-t dark:border-white w-full lg:leading-8">
				<p className="font-bold">
					{props.fromDate} - {props.toDate}
				</p>
				{props.description.map((description) => (
					<p key={description}>{description}</p>
				))}
				<div className="flex flex-row overflow-y-scroll no-scrollbar space-x-1 mt-2 lg:mt-6">
					{props.techStack.map((tech) => (
						<Badge variant="default" key={tech}>
							{tech}
						</Badge>
					))}
				</div>
			</div>
		</div>
	);
}
