import { RxGithubLogo } from "@preact-icons/rx";

const Header = () => {
    return (
        <div
            className="flex p-4 md:gap-3 items-center flex-wrap justify-between sticky top-0 bg-white/75 z-50 backdrop-blur-sm border-b "
            f-client-nav={false}
        >
            <a href="/" className="font-semibold text-jsr-gray-900 text-2xl">
                Shadcn{" "}
                <span className="font-semibold text-2xl text-[#FFD80D]">
                    Fresh
                </span>{" "}
                Buttons
            </a>
            <div className="flex items-center gap-3 flex-wrap">
                <div
                    className="flex items-center gap-2 lg:hidden flex-wrap"
                    f-client-nav={true}
                >
                    <a
                        href="/docs/installation"
                        // className="aria-[current]:text-green-600"
                        class="aria-[current]:text-[#263E64] rounded-md aria-[current]:border-[#263E64] aria-[current]:bg-[#DEEDED] border-transparent px-4 py-0.5 transition-colors hover:text-[#263E64] font-normal"
                    >
                        Installation
                    </a>
                    <a
                        href="/docs/examples"
                        // className="aria-[current]:text-green-600"
                        class="aria-[current]:text-[#263E64] rounded-md aria-[current]:border-[#263E64] aria-[current]:bg-[#DEEDED] border-transparent px-4 py-0.5 transition-colors hover:text-[#263E64] font-normal"
                    >
                        Examples
                    </a>
                    <a
                        href="/docs/props"
                        // className="aria-[current]:text-green-600"
                        class="aria-[current]:text-[#263E64] rounded-md aria-[current]:border-[#263E64] aria-[current]:bg-[#DEEDED] border-transparent px-4 py-0.5 transition-colors hover:text-[#263E64] font-normal"
                    >
                        Props
                    </a>
                </div>
                <a
                    href="https://github.com/mit-27/fresh-shadcn-buttons"
                    className="hover:text-[#64c2c2] inline-block transition"
                    aria-label="GitHub"
                    target={"_blank"}
                    rel="noopener noreferrer"
                >
                    <RxGithubLogo className="h-7 w-7 mr-3 " />
                </a>
            </div>
        </div>
    );
};

export default Header;
