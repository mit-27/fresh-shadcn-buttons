import { asset, Head } from "$fresh/runtime.ts";
import { HeroParticles } from "../islands/HeroParticles.tsx";
import { cn } from "../lib/utils.ts";
import { buttonVariants } from "./Button.tsx";
import { Button } from "./Button.tsx";
import Title from "./Title.tsx";

const canvasStyle = /*css*/ `.particles-js-canvas-el {
	position: absolute;
	inset: 0;
	z-index: -10;
	animation: fade-in-opacity 1s linear forwards;
	opacity: 0;
	transition: opacity 1s linear;
}
body {
	overflow-x: hidden;
}`;

const Hero = () => {
    return (
        <div
            class="w-screen min-h-screen -ml-[calc(50vw-50%)] -mt-6 bg-repeat py-32 lg:pt-48 relative before:absolute before:left-0 before:right-0 before:h-32 before:bg-gradient-to-t before:from-white before:bottom-0 before:z-10 before:pointer-events-none"
            id="particles-js"
        >
            <HeroParticles />
            <Head>
                <script src={asset("/scripts/particles.js")} defer></script>
            </Head>
            <style>{canvasStyle}</style>
            <div class="section-x-inset-xl flex flex-col items-center justify-center gap-12 relative pointer-events-none">
                <div class="text-center">
                    <h1 class="relative z-10 flex flex-col items-center gap-6 lg:gap-8">
                        <div
                            class="pointer-events-auto font-semibold text-jsr-gray-900 text-2xl text-balance leading-[1.1] sm:text-5xl md:text-5xl lg:text-5xl opsize-normal md:opsize-sm text-center -mt-5 md:-mt-6 max-w-[10em]"
                            style="text-shadow: 0 0 2em white, 0 0 1em white, 0 0 0.5em white, 0 0 0.25em white, 0 0 3em white, 0 0 0.5em white;"
                        >
                            {"Shadcn buttons for "}{" "}
                            <b className="text-[#FFD80D]">{"Fresh"}</b>
                            {" and "}{" "}
                            <b className="text-[#673AB9]">{"Preact"}</b>
                        </div>
                        <p className="relative z-10 text-balance text-center max-w-[40em] text-md sm:text-xl md:text-xl lg:text-xl">
                            {"Guide to import and use all shadcn buttons in your Fresh project. It is also compatible with any Preact based fronted framework."}
                        </p>
                    </h1>
                </div>
            </div>
            <div className="max-w-full flex items-center justify-center mt-6 gap-6">
                <a
                    href="/docs"
                    className={cn(
                        buttonVariants({
                            variant: "ringHover",
                            size: "lg",
                        }),
                    )}
                >
                    {"Explore the docs"}
                </a>
                <a
                    href="/docs"
                    className={cn(
                        buttonVariants({
                            variant: "shine",
                            size: "lg",
                        }),
                    )}
                >
                    {"Star on Github"}
                </a>
            </div>
        </div>
    );
};

export default Hero;
