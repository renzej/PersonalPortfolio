// Layout Imports
import { Navbar } from "@/layout/Navbar";

// Section Imports
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Technologies } from "@/sections/Technologies";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";

import { useState } from "react";

function App() {
	return (
		<div className="min-h-screen overflow-x-hidden">
			<Navbar />
			<main>
				<Hero />
				<About />
				<Technologies />
				<Projects />
				<Contact />
			</main>
		</div>
	);
}

export default App;
