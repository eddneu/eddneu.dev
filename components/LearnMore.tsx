"use client";

import { scrollIntoTheView } from "@/lib/utils";
import { Button } from "./ui/button";

export default function LearnMore() {
	return (
		<Button
			variant="outline"
			className="w-fit self-center"
			onClick={() => scrollIntoTheView("#about")}
		>
			Learn more
		</Button>
	);
}
