import type { PageProps } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";
import Header from "../../components/Header.tsx";

const DocsLayout = ({ Component }: PageProps) => {
    return (
        <div
            className="flex flex-col min-h-screen mx-auto max-w-screen-2xl"
            f-client-nav={true}
        >
            <Header />
            <div className="flex min-h-screen">
                <nav className="hidden pt-5 flex-shrink-0 lg:block ml-2 font-semibold border-r border-jsr-gray-200 lg:border-jsr-gray-300 w-[14rem]">
                    <div className="fixed flex w-[14rem]">
                        <div className="flex flex-col gap-3 w-[14rem] pr-2">
                            <a
                                href="/docs/installation"
                                // className="aria-[current]:text-green-600"
                                class="aria-[current]:text-[#263E64] rounded-r-md aria-[current]:border-[#263E64] aria-[current]:bg-[#DEEDED] border-l-4 border-transparent px-4 py-0.5 transition-colors hover:text-[#263E64] font-normal"
                            >
                                Installation
                            </a>
                            <a
                                href="/docs/examples"
                                // className="aria-[current]:text-green-600"
                                class="aria-[current]:text-[#263E64] rounded-r-md aria-[current]:border-[#263E64] aria-[current]:bg-[#DEEDED] border-l-4 border-transparent px-4 py-0.5 transition-colors hover:text-[#263E64] font-normal"
                            >
                                Buttons
                            </a>
                            <a
                                href="/docs/props"
                                // className="aria-[current]:text-green-600"
                                class="aria-[current]:text-[#263E64] rounded-r-md aria-[current]:border-[#263E64] aria-[current]:bg-[#DEEDED] border-l-4 border-transparent px-4 py-0.5 transition-colors hover:text-[#263E64] font-normal"
                            >
                                Props
                            </a>
                        </div>
                    </div>
                </nav>

                <Partial name="content">
                    <div className="min-w-0 flex-grow">
                        <Component />
                    </div>
                </Partial>
            </div>
        </div>
    );
};

export default DocsLayout;
