"use client";

import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useTheme } from "next-themes";

export default function ParticlesBackground() {
	const { theme } = useTheme();

	const particlesInit = useCallback(async (engine: Engine) => {
		await loadFull(engine);
	}, []);

	return (
		<Particles
			className="-z-50 absolute"
			id="tsparticles"
			init={particlesInit}
			options={{
				background: {
					color: {
						value: theme == "dark" ? "#121212" : "#e6e6e6",
					},
				},
				fpsLimit: 120,
				interactivity: {
					events: {
						onClick: {
							enable: false,
							mode: "push",
						},
						onHover: {
							enable: true,
							mode: "repulse",
						},
						resize: true,
					},
					modes: {
						push: {
							quantity: 2,
						},
						repulse: {
							distance: 75,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: theme == "dark" ? "#e6e6e6" : "#121212",
					},
					links: {
						color: theme == "dark" ? "#e6e6e6" : "#121212",
						distance: 125,
						enable: true,
						opacity: 0.15,
						width: 1,
					},
					move: {
						direction: "none",
						enable: true,
						outModes: {
							default: "bounce",
						},
						random: false,
						speed: 1,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 80,
					},
					opacity: {
						value: 0.25,
					},
					shape: {
						type: "circle",
					},
					size: {
						value: { min: 1, max: 5 },
					},
				},
				detectRetina: true,
			}}
		/>
	);
}
