// import {Tabs,TabsContent,TabsList,TabsTrigger} from "../../components/tabs.tsx";

import { RxArrowLeft, RxArrowRight } from "@preact-icons/rx";
import { Button } from "../../components/Button.tsx";
import CopyJSX from "../../islands/copy-code-jsx.tsx";

const DocsButtons = () => {
    return (
        <div className="p-5">
            <p className="flex items-center flex-wrap max-w-2xl mx-auto justify-center my-5 break-words">
                {"✨ Examples of all shadcn buttons. ❤️ Special thanks to "}
                <a
                    href="https://ui.shadcn.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline mx-2 inline"
                >
                    Shadcn
                </a>
                {","}
                <a
                    href="https://enhanced-button.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline mx-2 inline"
                >
                    Enhanced-Shadcn Button
                </a>
                {","}
                <a
                    href="https://magicui.design/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline mx-2 inline"
                >
                    Magic UI
                </a>
                {" and "}
                <a
                    href="https://syntaxui.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline mx-2 inline"
                >
                    Syntax UI
                </a>
                {" for the inspiration."}
            </p>
            <div className="grid gap-10 lg:grid-cols-2 grid-flow-row w-full ">
                <div className="flex relative items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <CopyJSX type="deno1" />
                    <Button size="lg" variant="deno1">
                        Deno 1
                    </Button>
                </div>
                <div className="flex relative items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <CopyJSX type="deno2" />
                    <Button size="lg" variant="deno2">Deno 2</Button>
                </div>
                <div className="flex relative items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <CopyJSX type="default" />
                    <Button size="lg">Default</Button>
                </div>
                <div className="flex relative items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <CopyJSX type="rainbow" />
                    <Button size="lg" variant="rainbow">Rainbow</Button>
                </div>
                <div className="flex relative items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <CopyJSX type="shine" />
                    <Button size="lg" variant="shine">Shine</Button>
                </div>
                <div className="flex relative items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <CopyJSX type="ringHover" />
                    <Button size="lg" variant="ringHover">Ring Hover</Button>
                </div>
                <div className="flex relative items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <CopyJSX type="heartbeat" />
                    <Button size="lg" variant="hearbeat">Heartbeat</Button>
                </div>
                <div className="flex relative items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <CopyJSX type="destructive" />
                    <Button size="lg" variant="destructive">Destructive</Button>
                </div>
                <div className="flex relative items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <CopyJSX type="gooeyLeft" />
                    <Button size="lg" variant="gooeyLeft">Gooey Left</Button>
                </div>
                <div className="flex relative items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <CopyJSX type="gooeyRight" />
                    <Button size="lg" variant="gooeyRight">Gooey Right</Button>
                </div>
                <div className="flex relative items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <CopyJSX type="expandIconLeft" />
                    <Button
                        variant="expandIcon"
                        Icon={RxArrowLeft}
                        iconPlacement="left"
                        size="lg"
                    >
                        Expand Left
                    </Button>
                </div>
                <div className="flex relative items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <CopyJSX type="expandIconRight" />
                    <Button
                        variant="expandIcon"
                        Icon={RxArrowRight}
                        iconPlacement="right"
                        size="lg"
                    >
                        Expand Right
                    </Button>
                </div>
                <div className="flex relative items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <CopyJSX type="smooth-bounce" />
                    <Button size="lg" variant="smooth-bounce">
                        Smooth Bounce
                    </Button>
                </div>
                <div className="flex relative items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <CopyJSX type="linkHover1" />
                    <Button size="lg" variant="linkHover1">Link Hover 1</Button>
                </div>
                <div className="flex relative items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <CopyJSX type="linkHover2" />
                    <Button size="lg" variant="linkHover2">Link Hover 2</Button>
                </div>
            </div>
        </div>
    );
};

export default DocsButtons;
