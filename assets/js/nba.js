import { videos } from "./videos/nba_videos.js";
import { db } from "../db/config.js";
let videos_area = document.querySelector(".videos_area");

let VideoTemplate = (list, newData) => {
  return `
  <a href="./view.html" id="${list.id}" class="image_wrapper">
  <img src=${list.poster} alt="" />
  <h1>${list.title} <span>(${
    newData.length > 0
      ? newData[0]["data"]["likes"] - newData[0]["data"]["dislikes"]
      : 0
  } likes this video)</span></h1>
</a>
    `;
};

const getData = () => {
  let data = [];

  db.collection("Articles").onSnapshot((snapshot) => {
    let changes = snapshot.docChanges();
    let data = [];
    changes.forEach((change) => {
      let idData = change.doc.id;
      let object = {
        id: idData,
        data: change.doc.data(),
      };
      data = [...data, object];
    });

    videos["list"].forEach((element) => {
      let newData = data.filter((EachData) => EachData.id == element.id);
      console.log(newData);
      videos_area.insertAdjacentHTML(
        "beforeend",
        VideoTemplate(element, newData)
      );
    });
    SetLocalStorageData();
  });
};
getData();
const SetLocalStorageData = (e) => {
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
};
