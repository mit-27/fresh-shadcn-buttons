// import {Tabs,TabsContent,TabsList,TabsTrigger} from "../../components/tabs.tsx";

import { RxArrowLeft, RxArrowRight } from "@preact-icons/rx";
import { Button } from "../../components/Button.tsx";

const DocsButtons = () => {
    return (
        <div className="p-5">
            <p className="flex items-center justify-center my-5">
                {"✨ Examples and usage of all shadcn buttons."}
            </p>
            <div className="grid gap-10 lg:grid-cols-2 grid-flow-row w-full ">
                <div className="flex items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <Button size="lg" variant="deno1">
                        Deno 1
                    </Button>
                </div>
                <div className="flex items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <Button size="lg" variant="deno2">Deno 2</Button>
                </div>
                <div className="flex items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <Button size="lg">Default</Button>
                </div>
                <div className="flex items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <Button size="lg" variant="rainbow">Rainbow</Button>
                </div>
                <div className="flex items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <Button size="lg" variant="shine">Shine</Button>
                </div>
                <div className="flex items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <Button size="lg" variant="ringHover">Ring Hover</Button>
                </div>
                <div className="flex items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <Button size="lg" variant="hearbeat">Heartbeat</Button>
                </div>
                <div className="flex items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <Button size="lg" variant="destructive">Destructive</Button>
                </div>
                <div className="flex items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <Button size="lg" variant="gooeyLeft">Gooey Left</Button>
                </div>
                <div className="flex items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <Button size="lg" variant="gooeyRight">Gooey Right</Button>
                </div>
                <div className="flex items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <Button
                        variant="expandIcon"
                        Icon={RxArrowLeft}
                        iconPlacement="left"
                        size="lg"
                    >
                        Expand Left
                    </Button>
                </div>
                <div className="flex items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <Button
                        variant="expandIcon"
                        Icon={RxArrowRight}
                        iconPlacement="right"
                        size="lg"
                    >
                        Expand Right
                    </Button>
                </div>
                <div className="flex items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <Button size="lg" variant="linkHover1">Link Hover 1</Button>
                </div>
                <div className="flex items-center justify-center shadow-sm rounded-lg h-52 bg-[#DEECED]">
                    <Button size="lg" variant="linkHover2">Link Hover 2</Button>
                </div>
            </div>
        </div>
    );
};

export default DocsButtons;
