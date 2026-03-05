import { motion } from "framer-motion";

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
							transition={{ duration: 0.5, delay: 0.2 }}
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
							className="text-5xl md:text-6xl lg:text-7xl font-semibold text-center md:text-left md:mb-2"
						>
							Rence Mayores
						</motion.h1>

						{/* Subtitle - fades in */}
						<motion.h3
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.5 }}
							className="text-lg md:text-3xl text-center md:text-left"
						>
							I'm a Full Stack Developer
						</motion.h3>
					</div>
				</div>
			</div>
		</section>
	);
};
