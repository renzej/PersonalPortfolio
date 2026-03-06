import { Cursor, useTypewriter } from "react-simple-typewriter";

export function RotatingTitle({
	words = [
		"Full-Stack Developer",
		"Web Developer",
		"Service Desk Analyst",
		"Freelancer",
		"Follower of Christ",
	],
	typeSpeed = 120,
	deleteSpeed = 80,
	delaySpeed = 1800,
	className = "",
	cursorColor = "currentColor",
}) {
	const [text] = useTypewriter({
		words,
		loop: 0,
		typeSpeed,
		deleteSpeed,
		delaySpeed,
	});

	return (
		<span className={className}>
			{text}
			<Cursor cursorStyle="|" cursorColor={cursorColor} />
		</span>
	);
}
