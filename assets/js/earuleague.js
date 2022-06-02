import { videos } from "./videos/earuleague_video.js";

let videos_area = document.querySelector(".videos_area");

let VideoTemplate = (src) => {
  return `
    <a href="./view.html?${src}" class="video_wrapper">
    <iframe
      width="560"
      height="315"
      src=${src}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </a>
    `;
};

videos["list"].forEach((element) => {
  videos_area.insertAdjacentHTML("beforeend", VideoTemplate(element));
});