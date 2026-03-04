// Imports
import { Button } from "@/components/Button";

const navLinks = [
	{ href: "#about", label: "About" },
	{ href: "#technologies", label: "Tech" },
	{ href: "#projects", label: "Projects" },
	{ href: "#contact", label: "Contact Me" },
];

export const Navbar = () => {
	return (
		<header className="fixed top-0 w-full glass z-50">
			<nav className="max-w-7xl mx-auto h-16 px-6 lg:px-32 flex items-center justify-between text-foreground">
				<a
					href="#"
					className="inline-flex items-center gap-0.5 text-xl md:text-2xl leading-none font-bold 
					tracking-tight hover:scale-110 hover:text-primary transition-all duration-300"
				>
					<span className="text-primary">./</span>
					<span>Rence</span>
				</a>

				<ul className="hidden md:flex items-center gap-10">
					{navLinks.map((link, index) => (
						<a
							href={link.href}
							key={index}
							className="px-4 py-2 text-muted-foreground hover:text-foreground opacity-70 hover:opacity-100 transition-opacity duration-300"
						>
							{link.label}
						</a>
					))}
				</ul>
			</nav>
		</header>
	);
};
