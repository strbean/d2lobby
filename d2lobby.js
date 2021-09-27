window.onload = function () {
    const prefixIn = document.getElementById("prefixIn");
    const numberIn = document.getElementById("numberIn");
    const copyBtn = document.getElementById("copyBtn");

    const getGameName = () => `${prefixIn.value}${numberIn.value}`;

    const renderCopyBtn = function() {
        copyBtn.innerText = getGameName();
    };

    const prefixFocused = function() {
        prefixIn.value = "";
        numberIn.value = "1";
        renderCopyBtn();
    };

    const copyBtnPressed = function() {
        navigator.clipboard.writeText(getGameName());

        // handle leading zeroes
        const nextNumber = numberIn.valueAsNumber + 1
        numberIn.value = `${nextNumber}`.padStart(numberIn.value.trim().length, "0")
        renderCopyBtn();
    };

    prefixIn.onfocus = prefixFocused;
    prefixIn.oninput = renderCopyBtn;
    numberIn.oninput = renderCopyBtn;
    copyBtn.onclick = copyBtnPressed;
};