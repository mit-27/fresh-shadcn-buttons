# Shadcn Fresh Buttons

Shadcn buttons for Deno's Fresh. Shadcn is based on radix-ui and it is not
compatible with preact based frontend framework. So I have created button
component whic is compatible with preact based framework.

## Installation

1. Install Fresh by running the following command:
   ```bash
   deno run -A -r https://fresh.deno.dev
   ```
2. Install the necessary dependencies by running the following command:
   ```bash
   deno add jsr:@preact-icons/rx npm:class-variance-authority npm:clsx npm:tailwind-merge npm:tailwindcss-animate
   ```
3. Configure **tailwind.config.ts** file.
   ```js
   import * as animate from "tailwindcss-animate";

   import type { Config } from "tailwindcss";

   const config: Config = {
       darkMode: ["class"],
       content: [
           "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
       ],
       theme: {
           container: {
               center: true,
               padding: "2rem",
               screens: {
                   "2xl": "1400px",
               },
           },
           extend: {
               colors: {
                   border: "hsl(var(--border))",
                   input: "hsl(var(--input))",
                   ring: "hsl(var(--ring))",
                   background: "hsl(var(--background))",
                   foreground: "hsl(var(--foreground))",
                   primary: {
                       DEFAULT: "hsl(var(--primary))",
                       foreground: "hsl(var(--primary-foreground))",
                   },
                   secondary: {
                       DEFAULT: "hsl(var(--secondary))",
                       foreground: "hsl(var(--secondary-foreground))",
                   },
                   destructive: {
                       DEFAULT: "hsl(var(--destructive))",
                       foreground: "hsl(var(--destructive-foreground))",
                   },
                   muted: {
                       DEFAULT: "hsl(var(--muted))",
                       foreground: "hsl(var(--muted-foreground))",
                   },
                   accent: {
                       DEFAULT: "hsl(var(--accent))",
                       foreground: "hsl(var(--accent-foreground))",
                   },
                   popover: {
                       DEFAULT: "hsl(var(--popover))",
                       foreground: "hsl(var(--popover-foreground))",
                   },
                   card: {
                       DEFAULT: "hsl(var(--card))",
                       foreground: "hsl(var(--card-foreground))",
                   },
               },
               borderRadius: {
                   lg: `var(--radius)`,
                   md: `calc(var(--radius) - 2px)`,
                   sm: "calc(var(--radius) - 4px)",
               },
               keyframes: {
                   rainbow: {
                       "0%": { "background-position": "0%" },
                       "100%": { "background-position": "200%" },
                   },
                   "shine": {
                       from: { backgroundPosition: "200% 0" },
                       to: { backgroundPosition: "-200% 0" },
                   },
                   "accordion-down": {
                       from: { height: "0" },
                       to: { height: "var(--radix-accordion-content-height)" },
                   },
                   "accordion-up": {
                       from: {
                           height: "var(--radix-accordion-content-height)",
                       },
                       to: { height: "0" },
                   },
                   buttonheartbeat: {
                       "0%": {
                           "box-shadow": "0 0 0 0 hsl(var(--pulse-color))",
                       },
                       "50%": {
                           "box-shadow": "0 0 0 7px hsl(var(--pulse-color)/0)",
                       },
                       "100%": {
                           "box-shadow": "0 0 0 0 hsl(var(--pulse-color)/0)",
                       },
                   },
               },
               animation: {
                   "accordion-down": "accordion-down 0.2s ease-out",
                   "shine": "shine 8s ease-in-out infinite",
                   "accordion-up": "accordion-up 0.2s ease-out",
                   rainbow: "rainbow var(--speed, 2s) infinite linear",
                   buttonheartbeat: "buttonheartbeat 2s infinite ease-in-out",
               },
           },
       },
       plugins: [
           animate,
       ],
   };

   export default config;
   ```
4. Replace the given modules in **deno.json** file.
   ```json
   "imports": {
   // other imports
   // Remove these two lines
   "preact": "https://esm.sh/preact@10.22.0",
   "preact/": "https://esm.sh/preact@10.22.0/",

   // Add these lines insted
   "preact": "npm:preact@10.22.1",
   "preact/hooks": "npm:preact@10.22.1/hooks",
   "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
   },

   /// Rest of the file
   ```
5. Make sure to remove `node_modules` and install the dependencies using
   `deno install` command.

6. Configure the **static/style.css** file.
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   @layer base {
       :root {
           --background: 0 0% 100%;
           --foreground: 222.2 47.4% 11.2%;

           --muted: 210 40% 96.1%;
           --muted-foreground: 215.4 16.3% 46.9%;

           --popover: 0 0% 100%;
           --popover-foreground: 222.2 47.4% 11.2%;

           --border: 214.3 31.8% 91.4%;
           --input: 214.3 31.8% 91.4%;

           --card: 0 0% 100%;
           --card-foreground: 222.2 47.4% 11.2%;

           --primary: 222.2 47.4% 11.2%;
           --primary-foreground: 210 40% 98%;

           --secondary: 210 40% 96.1%;
           --secondary-foreground: 222.2 47.4% 11.2%;

           --accent: 210 40% 96.1%;
           --accent-foreground: 222.2 47.4% 11.2%;

           --destructive: 0 100% 50%;
           --destructive-foreground: 210 40% 98%;

           --ring: 215 20.2% 65.1%;

           --radius: 0.5rem;

           --color-1: 0 100% 63%;
           --color-2: 270 100% 63%;
           --color-3: 210 100% 63%;
           --color-4: 195 100% 63%;
           --color-5: 90 100% 63%;
           --pulse-color: var(--primary);
       }

       .dark {
           --background: 224 71% 4%;
           --foreground: 213 31% 91%;

           --muted: 223 47% 11%;
           --muted-foreground: 215.4 16.3% 56.9%;

           --accent: 216 34% 17%;
           --accent-foreground: 210 40% 98%;

           --popover: 224 71% 4%;
           --popover-foreground: 215 20.2% 65.1%;

           --border: 216 34% 17%;
           --input: 216 34% 17%;

           --card: 224 71% 4%;
           --card-foreground: 213 31% 91%;

           --primary: 210 40% 98%;
           --primary-foreground: 222.2 47.4% 1.2%;

           --secondary: 222.2 47.4% 11.2%;
           --secondary-foreground: 210 40% 98%;

           --destructive: 0 63% 31%;
           --destructive-foreground: 210 40% 98%;

           --ring: 216 34% 17%;

           --radius: 0.5rem;

           --color-1: 0 100% 63%;
           --color-2: 270 100% 63%;
           --color-3: 210 100% 63%;
           --color-4: 195 100% 63%;
           --color-5: 90 100% 63%;
           --pulse-color: var(--primary);
       }
   }

   @layer base {
       * {
           @apply border-border;
       }
       body {
           @apply bg-background text-foreground;
           font-feature-settings: "rlig" 1, "calt" 1;
       }
   }
   ```

7. Create `lib/utils.ts` file.
   ```js
   import { type ClassValue, clsx } from "clsx";
   import { twMerge } from "tailwind-merge";

   export function cn(...inputs: ClassValue[]) {
       return twMerge(clsx(inputs));
   }
   ```
8. Create `components/Button.tsx` file.
   ```js
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
   ```

- That's all you have to do. Now you can check the examples and copy their code
  snippets. Also, check out the props, as they are mostly the same as Shadcn
  buttons.

## Props

| Prop          | Type                     | Default | Values                                                                                                                                                                                                                                  | Description                                                        |
| ------------- | ------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| variant       | string                   | default | default \| destructive \| outline \| secondary \| ghost \| link \| expandIcon \| ringHover \| shine \| gooeyRight \| gooeyLeft \| linkHover1 \| linkHover2 \| rainbow \| rainbow-outline \| hearbeat \| deno1 \| deno2 \| smooth-bounce | Type of the button.                                                |
| size          | string                   | default | default \| sm \| lg \| icon                                                                                                                                                                                                             | Size of the button.                                                |
| className     | string                   | -       | -                                                                                                                                                                                                                                       | Custom CSS class for styling.                                      |
| children      | Preact.ComponentChildren | -       | -                                                                                                                                                                                                                                       | Children elements.                                                 |
| asChild       | boolean                  | false   | true \| false                                                                                                                                                                                                                           | Make it Enable to pass all props of button to its immediate child. |
| Icon          | Preact.ComponentType     | -       | Any icon from Icon libraries                                                                                                                                                                                                            | Use it with variant 'expandIcon' and specify iconPlacement.        |
| iconPlacement | string                   | -       | left \| right                                                                                                                                                                                                                           | Use it with variant 'expandIcon' and specify Icon.                 |

## Credits

- Special thanks to [Shadcn](https://ui.shadcn.com/),
  [enhanced-button](https://enhanced-button.vercel.app/),
  [Magic UI](https://magicui.design/) and [Syntax UI](https://syntaxui.com/) for
  the inspiration.

## Support

Support me by giving a star ⭐ on this repository.

## License

This project is licensed under the MIT License.
