import { videos } from "./videos/Home.js";

let VideosWrapper = document.querySelector(".body_content_area .left_side");
let HTMLTEMPLATE = (heading, list, link) => {
  return `
<section class="video_cycle">
<div class="heading_area">
  <h1>${heading}</h1>
</div>

<div class="video_container">
  <div class="video_wrapper">
    <iframe
      width="560"
      height="315"
      src=${list[0]}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <div class="video_wrapper">
    <iframe
      width="560"
      height="315"
      src=${list[1]}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>

  <div class="video_wrapper">
    <iframe
      width="560"
      height="315"
      src=${list[2]}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <div class="video_wrapper">
    <iframe
      width="560"
      height="315"
      src=${list[3]}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</div>

<div class="button_wrapper">
  <a href=${link}> Check All </a>
</div>
</section>

`;
};
videos.forEach((EachVideoObj) => {
  VideosWrapper.insertAdjacentHTML(
    "beforeend",
    HTMLTEMPLATE(EachVideoObj.title, EachVideoObj.list, EachVideoObj.link)
  );
});
