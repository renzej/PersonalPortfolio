import { motion } from "framer-motion";
import { RotatingTitle } from "@/components/RotatingTitle";
import { Button } from "@/components/Button";
import { Github, Linkedin, Instagram, Phone, ArrowRight } from "lucide-react";

export const Hero = () => {
	return (
		<section className="relative min-h-screen flex items-center overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0">
				<img
					src="/hero-bg.png"
					alt="Hero Background"
					className="w-full h-full object-cover opacity-70 -scale-y-100"
				/>
			</div>

			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/70 to-background" />

			{/* Content */}
			<div
				className="relative mx-auto max-w-6xl w-full px-6 md:px-12 lg:px-28 py-32"
				id="hero"
			>
				<div className="flex flex-col-reverse items-center md:items-start md:flex-row gap-8 md:gap-16 lg:gap-24">
					{/* Text Block */}
					<div className="flex flex-col items-center md:items-start gap-3">
						{/* Available for work badge — slides in from left */}
						<motion.div
							initial={{ opacity: 0, x: -40 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="glass-frosted rounded-xl px-3 py-1"
						>
							<div className="flex items-center gap-4">
								<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
								<span className="text-xs md:text-sm">
									Available for work
								</span>
							</div>
						</motion.div>

						{/* Name — fades in */}
						<motion.h1
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.5 }}
							className="text-4xl md:text-6xl lg:text-7xl font-semibold text-center md:text-left md:mb-2"
						>
							Clarence Mayores
						</motion.h1>

						{/* Subtitle - fades in */}
						<motion.h3
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.5 }}
							className="text-lg md:text-3xl text-center md:text-left text-foreground/70 md:mb-2"
						>
							I'm a{" "}
							<RotatingTitle className="text-primary font-semibold" />
						</motion.h3>
						<motion.h4
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.5 }}
							className="md:text-lg text-center md:text-left font-light text-foreground/60"
						>
							Building reliable solutions and support users can
							count on.
						</motion.h4>

						{/* Buttons */}
						<motion.div className="flex mt-2 md:mt-3 items-center">
							<Button
								className="group text-sm rounded-lg"
								size="sm"
							>
								My Projects{" "}
								<ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 duration-300" />
							</Button>
						</motion.div>

						{/* Social Buttons - slide from the bottom going up */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.5 }}
							className="flex gap-3 mt-2 md:mt-3"
						>
							{[
								{ icon: Github, href: "#" },
								{ icon: Linkedin, href: "#" },
								{ icon: Instagram, href: "#" },
								{ icon: Phone, href: "#" },
							].map((social, idx) => (
								<a
									key={idx}
									href={social.href}
									className="group p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-108 origin-bottom"
								>
									{
										<social.icon className="md:h-4 md:w-4 transition-transform duration-300 group-hover:scale-110" />
									}
								</a>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};
