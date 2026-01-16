import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { Results } from "@/components/sections/Results";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <Hero />
            <div className="space-y-4 md:space-y-0">
                <About />
                <Services />
                <Work />
                <Process />
                <Results />
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
