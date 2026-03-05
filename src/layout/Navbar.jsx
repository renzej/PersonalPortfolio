// Imports
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
	{ href: "#about", label: "About" },
	{ href: "#technologies", label: "Tech" },
	{ href: "#projects", label: "Projects" },
	{ href: "#contact", label: "Contact Me" },
];

export const Navbar = () => {
	// State variables
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<header className="fixed top-0 w-full glass z-50">
			<nav className="max-w-7xl mx-auto h-16 px-6 lg:px-32 flex items-center justify-between text-foreground">
				{/* Logo section */}
				<a
					href="#"
					className="inline-flex items-center gap-0.5 text-xl md:text-2xl leading-none font-bold 
					tracking-tight hover:scale-110 hover:text-primary transition-all duration-300"
				>
					<span className="text-primary">./</span>
					<span>Rence</span>
				</a>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center gap-10">
					{navLinks.map((link, index) => (
						<a
							href={link.href}
							key={index}
							className="px-4 py-2 text-muted-foreground hover:text-foreground opacity-70 hover:opacity-100 transition-opacity duration-300"
						>
							{link.label}
						</a>
					))}
				</div>

				{/* Mobile Menu Burger Button */}
				<button
					className="md:hidden p-2 text-foreground cursor-pointer"
					onClick={() => setIsMobileMenuOpen((prev) => !prev)}
				>
					{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</nav>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						key="mobile-menu"
						className="md:hidden glass-strong overflow-hidden"
						initial={{ height: 0, opacity: 0, y: -8 }}
						animate={{ height: "auto", opacity: 1, y: 0 }}
						exit={{ height: 0, opacity: 0, y: -8 }}
						transition={{ duration: 0.25, ease: "easeInOut" }}
					>
						<div className="container mx-auto px-6 py-6 flex flex-col gap-4">
							{navLinks.map((link, index) => (
								<a
									href={link.href}
									key={index}
									className="text-lg text-muted-foreground hover:text-foreground py-2"
								>
									{link.label}
								</a>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};
