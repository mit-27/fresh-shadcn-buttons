// import { Slot, Slottable } from "@radix-ui/react-slot";
import { ComponentChildren, isValidElement, JSX } from "preact";
import { cloneElement, forwardRef } from "preact/compat";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils.ts";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                expandIcon:
                    "group relative text-primary-foreground bg-primary hover:bg-primary/90",
                ringHover:
                    "bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2",
                shine:
                    "text-primary-foreground animate-shine bg-gradient-to-r from-primary via-primary/75 to-primary bg-[length:400%_100%] ",
                gooeyRight:
                    "text-primary-foreground relative bg-primary z-0 overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-gradient-to-r from-zinc-400 before:transition-transform before:duration-1000  hover:before:translate-x-[0%] hover:before:translate-y-[0%] ",
                gooeyLeft:
                    "text-primary-foreground relative bg-primary z-0 overflow-hidden transition-all duration-500 after:absolute after:inset-0 after:-z-10 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l from-zinc-400 after:transition-transform after:duration-1000  hover:after:translate-x-[0%] hover:after:translate-y-[0%] ",
                linkHover1:
                    "relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300",
                linkHover2:
                    "relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300",
                rainbow:
                    "group relative animate-rainbow cursor-pointer border-0 bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] bg-[length:200%] text-primary-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
                "rainbow-outline":
                    "group relative animate-rainbow cursor-pointer border-0 border-input bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] bg-[length:200%] px-4 text-foreground shadow-sm [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
                hearbeat:
                    "animate-buttonheartbeat bg-primary text-primary-foreground",
                deno1:
                    "bg-gradient-to-br from-primary/40 to-primary text-white font-semibold hover:bg-secondary transition-colors duration-200 ease-in-out",
                deno2:
                    "border-[1.5px] border-primary bg-secondary font-bold text-primary shadow-[5px_6px_0_0_#64748b55] outline-primary outline-offset-2 transition-all duration-75 ease-in-out rounded-lg hover:bg-primary/5 focus:outline focus:outline-2",
                "smooth-bounce":
                    "transition-transform duration-300 ease-in-out hover:scale-110 bg-primary text-primary-foreground",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

interface IconProps {
    Icon: preact.ComponentType;
    iconPlacement: "left" | "right";
}

interface IconRefProps {
    Icon?: never;
    iconPlacement?: undefined;
}

type ButtonHTMLAttributes = Omit<
    JSX.HTMLAttributes<HTMLButtonElement>,
    keyof VariantProps<typeof buttonVariants>
>;

export interface ButtonProps
    extends ButtonHTMLAttributes, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    children?: ComponentChildren;
    pulseColor?: string;
}

export type ButtonIconProps = IconProps | IconRefProps;

const Button = forwardRef<
    HTMLButtonElement,
    ButtonProps & ButtonIconProps
>(
    (
        {
            className,
            variant,
            asChild = false,
            size,
            Icon,
            iconPlacement,
            children,
            ...props
        },
        ref,
    ) => {
        if (asChild && isValidElement(children)) {
            return cloneElement(children as preact.VNode, {
                className: cn(buttonVariants({ variant, size, className })),
                ref,
                ...props,
                children: (
                    <>
                        {Icon && iconPlacement === "left" && (
                            <div className="w-0 translate-x-[0%] pr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-100 group-hover:pr-2 group-hover:opacity-100">
                                <Icon />
                            </div>
                        )}
                        {children.props.children}
                        {Icon && iconPlacement === "right" && (
                            <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
                                <Icon />
                            </div>
                        )}
                    </>
                ),
            });
        }

        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {Icon && iconPlacement === "left" && (
                    <div className="w-0 translate-x-[0%] pr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-100 group-hover:pr-2 group-hover:opacity-100">
                        <Icon />
                    </div>
                )}
                {children}
                {Icon && iconPlacement === "right" && (
                    <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
                        <Icon />
                    </div>
                )}
            </button>
        );
    },
);
Button.displayName = "Button";

export { Button, buttonVariants };
