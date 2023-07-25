import BottomGradient from "@/components/BottomGradient";
import ParticlesBackground from "@/components/ParticlesBackground";
import About from "@/components/pages/About";
import Info from "@/components/pages/Info";
import Landing from "@/components/pages/Landing";

export default function Home() {
	return (
		<main className="mr-auto ml-auto w-full h-screen snap snap-y snap-mandatory no-scrollbar overflow-y-scroll">
			<ParticlesBackground />
			<Landing />
			<About />
			<Info />
			<BottomGradient />
		</main>
	);
}
