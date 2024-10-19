import { cn } from "../lib/utils.ts";
import { ComponentChildren } from "preact";

const Title = (
    { children, className }: {
        children: ComponentChildren;
        className?: string;
    },
) => {
    return (
        <h1
            className={cn(
                "text-black dark:text-white",
                "relative mx-0 max-w-[43.5rem]  pt-5  md:mx-auto md:px-4 md:py-2",
                "text-balance text-left font-semibold tracking-tighter md:text-center",
                "text-5xl sm:text-6xl md:text-6xl lg:text-6xl",
                className,
            )}
        >
            {children}
        </h1>
    );
};

export default Title;
