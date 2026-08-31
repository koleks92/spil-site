
// Gallery
const thumbnails = document.querySelectorAll(".thumbnails");

console.log(thumbnails)

const video = document.getElementById("video");
const player = document.getElementById("player");

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (event) => {
        thumbnails.forEach((thumbnail) => thumbnail.classList.remove("active_video"));
        event.target.classList.add("active_video");
        console.log(event.target.classList);
        player.src = event.target.src.replace("jpg", "webm");
        video.load();
    })
})

// 