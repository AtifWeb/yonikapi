import { videos } from "./videos/Home copy.js";

let VideosWrapper = document.querySelector(".body_content_area .left_side");
let HTMLTEMPLATE = (heading, list, link) => {
  return `
<section class="video_cycle">
<div class="heading_area">
  <h1>${heading}</h1>
</div>

<div class="video_container">
<a href="./view.html" id=${list[0].id} class="image_wrapper">
<img
  src=${list[0].poster}
  alt=""
/>
<h1>${list[0].title} <span>(220+ likes this video)</span></h1>
</a>

<a href="./view.html" id=${list[1].id} class="image_wrapper">
<img
src=${list[1].poster}
  alt=""
/>
<h1>${list[1].title}  <span>(220+ likes this video)</span></h1>
</a>
<a href="./view.html"  id=${list[2].id} class="image_wrapper">
<img
src=${list[2].poster}
  alt=""
/>
<h1>${list[2].title} <span>(220+ likes this video)</span></h1>
</a>
<a href="./view.html" id=${list[3].id} class="image_wrapper">
<img
src=${list[3].poster}
  alt=""
/>
<h1>
${list[3].title} <span>(220+ likes this video)</span></span>
</h1>
</a>
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

document.querySelectorAll(".video_container a").forEach((EachAnchor) => {
  EachAnchor.addEventListener("click", (e) => {
    // e.preventDefault();
    let id = e.target.id;
    let data = [];
    videos.forEach((EachObj) => {
      let List = EachObj.list;

      let filterValue = List.filter((EachFilterObj) => EachFilterObj.id == id);
      if (filterValue.length > 0) {
        data = filterValue;
      }
    });

    if (data.length > 0) {
      let Injson = JSON.stringify(data[0]);
      window.sessionStorage.setItem("Data", Injson);
    }
  });
});
