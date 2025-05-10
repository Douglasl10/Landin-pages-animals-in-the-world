const sections = document.querySelectorAll("section");
let currentIndex = 0;

function showSection(index) {
    sections.forEach((section, i) => {
        if (i === index) {
            section.style.display = "flex";
        } else {
            section.style.display = "none";
        }
    });

}

function nextSection() {
    currentIndex = (currentIndex + 1) % sections.length;
    showSection(currentIndex);
}

function prevSection() {
    currentIndex = (currentIndex - 1 + sections.length) % sections.length;
    showSection(currentIndex);
}

const nav = document.createElement("div");
nav.className = "navigation";
nav.innerHTML = `
    <button id="prevBtn">Anterior</button>
    <button id="nextBtn">Próximo</button>
`;
document.body.appendChild(nav);

document.getElementById("nextBtn").addEventListener("click", nextSection);
document.getElementById("prevBtn").addEventListener("click", prevSection);


showSection(currentIndex);
