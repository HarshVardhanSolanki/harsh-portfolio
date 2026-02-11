const username = "HarshVardhanSolanki";
const repoContainer = document.getElementById("repo-container");

fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
.then(res => res.json())
.then(data => {
    data.slice(0, 6).forEach(repo => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || "Project repository"}</p>
            <a href="${repo.html_url}" target="_blank">View Code</a>
        `;
        repoContainer.appendChild(card);
    });
});
