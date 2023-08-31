document.querySelector(".card-number-input").oninput = () => {
    document.querySelector(".card-number-box").innerText =
        document.querySelector(".card-number-input").value;
};

document.querySelector(".card-holder-input").oninput = () => {
    document.querySelector(".card-holder-name").innerText =
        document.querySelector(".card-holder-input").value;
};

document.querySelector(".month-input").oninput = () => {
    document.querySelector(".expire-month").innerText =
        document.querySelector(".month-input").value;
};

document.querySelector(".year-input").oninput = () => {
    document.querySelector(".expire-year").innerText =
        document.querySelector(".year-input").value;
};

document.querySelector(".cvv-input").onmouseenter = () => {
    document.querySelector(".card-front").style.transform =
        "perspective(1000px) rotateY(-180deg)";
    document.querySelector(".card-back").style.transform =
        "perspective(1000px) rotateY(0deg)";
};

document.querySelector(".cvv-input").onmouseleave = () => {
    document.querySelector(".card-front").style.transform =
        "perspective(1000px) rotateY(0deg)";
    document.querySelector(".card-back").style.transform =
        "perspective(1000px) rotateY(180deg)";
};

document.querySelector(".cvv-input").oninput = () => {
    document.querySelector(".cvv-box").innerText =
        document.querySelector(".cvv-input").value;
};