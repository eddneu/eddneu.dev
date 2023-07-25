"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { scrollIntoTheView } from "@/lib/utils";

export function NavBar() {
	return (
		<header className="top-0 fixed w-full z-40 bg-gradient-to-b from-background via-background">
			<div className="container flex h-16 items-center">
				<div className="flex flex-1 justify-end ">
					<nav className="flex items-center space-x-1">
						<Button variant="link" onClick={() => scrollIntoTheView("#home")}>
							Home
						</Button>
						<Button variant="link" onClick={() => scrollIntoTheView("#about")}>
							About
						</Button>
						<Button variant="link" onClick={() => scrollIntoTheView("#info")}>
							Work
						</Button>
						<ThemeToggle />
					</nav>
				</div>
			</div>
		</header>
	);
}
