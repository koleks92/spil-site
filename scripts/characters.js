// Characters

function show(button) {
    let nextEl = button.nextElementSibling;
    while (nextEl) {
        if (nextEl.style.display === "block") {
            nextEl.style.display = "none"
            button.innerHTML = "Read more...";
        } else {
            nextEl.style.display = "block";
            button.innerHTML = "Hide";
        }
        nextEl = nextEl.nextElementSibling;
    }

};
