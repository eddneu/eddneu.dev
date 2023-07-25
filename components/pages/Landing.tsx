import LearnMore from "../LearnMore";
import { Button } from "../ui/button";

export default function Landing() {
	return (
		<section
			id="#home"
			className="container h-screen w-full flex justify-center items-center snap-start"
		>
			<div className="flex flex-col justify-center items-center text-center h-fit w-fit rounded-lg p-6 backdrop-blur-xs">
				<h1 className="text-4xl font-bold font-mono">Eddie Neumann</h1>
				<p className="text-lg font-bold pb-6">
					Software developer from Sweden.
				</p>
				<LearnMore />
			</div>
		</section>
	);
}
