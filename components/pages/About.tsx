import Image from "next/image";
import portrait from "../../public/eddie.png";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function About() {
	return (
		<section
			id="#about"
			className="h-screen w-full flex snap-start bg-gradient-to-t from-50% from-background"
		>
			<div className="container h-screen w-full flex justify-center items-center">
				<div className="flex flex-col justify-center items-center h-full max-h-full overflow-y-scroll no-scrollbar">
					<Image
						src={portrait}
						alt="Eddie Neumann"
						className="dark:grayscale rounded-3xl w-3/4 sm:w-1/3 backdrop-blur-xl"
					/>
					<div className="flex flex-row w-full sm:w-1/3 h-fit p-3 justify-around">
						<Link
							className={buttonVariants({ variant: "link" })}
							href="https://github.com/eddneu"
							target="_blank"
						>
							<Github />
						</Link>
						<Link
							className={buttonVariants({ variant: "link" })}
							href="https://linkedin.com/in/eddie-neumann"
							target="_blank"
						>
							<Linkedin />
						</Link>
					</div>
					<div className="flex flex-col w-full h-fit sm:w-3/4 overflow-y-scroll text-lg md:text-xl lg:text-2xl no-scrollbar">
						<p className="pt-3 lg:pt-7">
							Hey, my name is{" "}
							<span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
								Eddie Neumann.
							</span>
						</p>
						<p className="pt-3 lg:pt-7">
							I&apos;m a backend developer currently focused on learning Java
							Spring Boot and AWS.
						</p>
						<p className="pt-3 lg:pt-7">
							Besides that I&apos;m also learning and getting more comfortable
							with TypeScript and NextJS 13.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
