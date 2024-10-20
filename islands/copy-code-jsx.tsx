import { RxCheck, RxCopy } from "@preact-icons/rx";
import { Button } from "../components/Button.tsx";
import { useState } from "preact/hooks";
import type { PageProps } from "$fresh/server.ts";
import { ButtonJSX } from "../data/codeblocks.ts";

interface CopyJSXProps {
    type: string;
}

const CopyJSX = (props: CopyJSXProps) => {
    const [copy, setCopy] = useState<boolean>(false);

    const handleClick = () => {
        setCopy(true);
        navigator.clipboard.writeText(ButtonJSX[props?.type]);
        setTimeout(() => {
            setCopy(false);
        }, 2000);
    };

    return (
        <Button
            size={"sm"}
            variant={"outline"}
            onClick={() => handleClick()}
            className="absolute right-3 top-2 text-sm"
        >
            {!copy ? <RxCopy /> : <RxCheck />}
        </Button>
    );
};

export default CopyJSX;
