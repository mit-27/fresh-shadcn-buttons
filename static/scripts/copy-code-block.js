function copyCodeBlock() {
    const codeBlocks = document.querySelectorAll("pre code");

    // Add a copy button to each code block
    codeBlocks.forEach((codeBlock) => {
        const button = document.createElement("button");
        button.innerText = "Copy";
        button.className = "copy-btn";
        button.style.cssText = "position: absolute; right: 10px; top: 0px;";

        // Handle the copy functionality
        button.addEventListener("click", () => {
            const codeText = codeBlock.textContent || "";
            navigator.clipboard.writeText(codeText).then(() => {
                button.innerText = "Copied!";
                setTimeout(() => (button.innerText = "Copy"), 2000);
            });
        });

        // Create a wrapper for positioning
        const wrapper = document.createElement("div");
        wrapper.style.cssText =
            "position: relative; display: inline-block; width: 100%;";

        codeBlock.parentElement?.insertBefore(wrapper, codeBlock);
        wrapper.appendChild(codeBlock);
        wrapper.appendChild(button);
    });
}

copyCodeBlock();
