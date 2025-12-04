/* ---------- MUSIC DROPDOWN ---------- */
const albumDisplay = document.getElementById("albumDisplay");
document.getElementById("musicSelect").addEventListener("change", function () {
    if (this.value === "yb") {
        albumDisplay.innerHTML = `<h3>NBA Youngboy – The Last Slimeto</h3>`;
    } else if (this.value === "hunxho") {
        albumDisplay.innerHTML = `<h3>Hunxho – 22</h3>`;
    } else {
        albumDisplay.innerHTML = "";
    }
});

/* ---------- AJAX FEATURE: Random Joke ---------- */
const jokeBtn = document.getElementById("loadJokeBtn");
const jokeDisplay = document.getElementById("jokeDisplay");

jokeBtn.addEventListener("click", () => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
        .then(response => response.json())
        .then(data => {
            jokeDisplay.textContent = data.joke;
        })
        .catch(err => {
            console.error(err);
            jokeDisplay.textContent = "Failed to load a joke. Try again!";
        });
});
