interface ButtonJSX {
    variant: string;
    code: string;
}

export const ButtonJSX: Record<string, string> = {
    "deno1": '<Button variant="deno1">Deno 1</Button>',
    "deno2": '<Button variant="deno2">Deno 2</Button>',
    "default": '<Button variant="default">Default</Button>',
    "rainbow": '<Button variant="rainbow">Rainbow</Button>',
    "shine": '<Button variant="shine">Shine</Button>',
    "ringHover": '<Button variant="ringHover">Ring Hover</Button>',
    "hearbeat": '<Button variant="hearbeat">Heartbeat</Button>',
    "destructive": '<Button variant="destructive">Destructive</Button>',
    "gooeyLeft": '<Button variant="gooeyLeft">Gooey Left</Button>',
    "gooeyRight": '<Button variant="gooeyRight">Gooey Right</Button>',
    "expandIconLeft":
        '<Button variant="expandIcon" Icon={RxArrowLeft} iconPlacement="left" size="lg">Expand Left</Button>',
    "expandIconRight":
        '<Button variant="expandIcon" Icon={RxArrowRight}iconPlacement="right"size="lg">Expand Right</Button>',
    "smooth-bounce":
        '<Button variant="smooth-bounce" size="lg">Smooth Bounce</Button>',
    "linkHover1": '<Button variant="linkHover1">Link Hover 1</Button>',
    "linkHover2": '<Button variant="linkHover2">Link Hover 2</Button>',
};
