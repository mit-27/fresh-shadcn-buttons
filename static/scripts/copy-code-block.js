function copyCodeBlock() {
    const codeBlocks = document.querySelectorAll("pre");

    // Add a copy button to each code block
    codeBlocks.forEach((codeBlock) => {
        const button = document.createElement("button");
        button.innerText = "Copy";
        button.className = "copy-btn";
        button.style.cssText =
            "position: absolute; right: 10px; top: 5px;padding: 0.5rem;border-radius: 0.375rem; font-size: 0.875rem;line-height: 1.25rem; background-color: #ffffff; ";

        // Handle the copy functionality
        button.addEventListener("click", () => {
            const codeText = codeBlock.textContent || "";
            navigator.clipboard.writeText(codeText).then(() => {
                button.innerText = "Copied!";
                setTimeout(() => (button.innerText = "Copy"), 2000);
            });
        });

        codeBlock.style.cssText = "position: relative;;width: 100%;";
        codeBlock.appendChild(button);
    });
}

copyCodeBlock();
