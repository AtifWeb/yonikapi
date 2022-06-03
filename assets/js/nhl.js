import { videos } from "./videos/nhl_videos.js";

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
document
  .querySelectorAll(".videos_area .image_wrapper")
  .forEach((EachAnchor) => {
    EachAnchor.addEventListener("click", (e) => {
      let id = e.target.id;
      let data = [];

      let filterValue = videos["list"].filter(
        (EachFilterObj) => EachFilterObj.id == id
      );
      console.log(filterValue);
      if (filterValue.length > 0) {
        data = filterValue;
      }

      if (data.length > 0) {
        let Injson = JSON.stringify(data[0]);
        window.sessionStorage.setItem("Data", Injson);
      }
    });
  });
