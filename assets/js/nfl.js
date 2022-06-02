import { videos } from "./videos/nfl_videos.js";

let videos_area = document.querySelector(".videos_area");

let VideoTemplate = (list) => {
  return `
  <a href="./view.html" id="${list.id}" class="image_wrapper">
  <img src=${list.poster} alt="" />
  <h1>${list.title} <span>(220+ likes this video)</span></h1>
</a>
    `;
};

videos["list"].forEach((element) => {
  videos_area.insertAdjacentHTML("beforeend", VideoTemplate(element));
});
