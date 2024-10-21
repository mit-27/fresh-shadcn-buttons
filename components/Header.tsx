import { RxGithubLogo } from "@preact-icons/rx";

const Header = () => {
    return (
        <div
            className="flex p-4 items-center justify-between sticky top-0 bg-white/75 z-50 backdrop-blur-sm border-b "
            f-client-nav={false}
        >
            <a href="/" className="font-semibold text-jsr-gray-900 text-2xl">
                Shadcn{" "}
                <span className="font-semibold text-2xl text-[#FFD80D]">
                    Fresh
                </span>{" "}
                Buttons
            </a>
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
    );
};

export default Header;
