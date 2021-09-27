window.onload = function () {
    const prefixIn = document.getElementById("prefixIn");
    const numberIn = document.getElementById("numberIn");
    const copyBtn = document.getElementById("copyBtn");
    const copyBtnText = document.getElementById("copyBtnText");
    const alertBox = document.getElementById("alertBox");
    const alertBoxText = document.getElementById("alertBoxText");

    const getGameName = () => `${prefixIn.value}${numberIn.value}`;

    const renderCopyBtn = function() {
        copyBtnText.innerText = getGameName();
    };

    const prefixFocused = function() {
        prefixIn.value = "";
        numberIn.value = "1";
        renderCopyBtn();
    };

    const copyBtnPressed = function() {
        navigator.clipboard.writeText(getGameName());

        // animate alert box showing text was copied to clipboard
        alertBoxText.innerText = getGameName();
        alertBox.classList.add("show");
        setTimeout(() => alertBox.classList.remove("show"), 3000);

        // handle leading zeroes
        const nextNumber = numberIn.valueAsNumber + 1
        numberIn.value = `${nextNumber}`.padStart(numberIn.value.trim().length, "0")
        renderCopyBtn();
    };

    const alertBoxClicked = function() {
        alertBox.classList.remove("show")
    }

    prefixIn.onfocus = prefixFocused;
    prefixIn.oninput = renderCopyBtn;
    numberIn.oninput = renderCopyBtn;
    copyBtn.onclick = copyBtnPressed;
    alertBox.onclick = alertBoxClicked;
};