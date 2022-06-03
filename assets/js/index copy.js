import { videos } from "./videos/Home copy.js";
import { GoogleService, auth, db } from "../db/config.js";
// var citiesRef = db.collection("cities");

const getData = (id) => {
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
    GetData(data);
  });
};

let VideosWrapper = document.querySelector(".body_content_area .left_side");
let HTMLTEMPLATE = (heading, list, link, LikesObj) => {
  console.log(LikesObj);
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
<h1>${list[0].title} <span>(${
    LikesObj["LikesOne"].length > 0
      ? LikesObj["LikesOne"][0]["data"]["likes"]
      : 0
  }) likes this video)</span></h1>
</a>

<a href="./view.html" id=${list[1].id} class="image_wrapper">
<img
src=${list[1].poster}
  alt=""
/>
<h1>${list[1].title}  <span>(${
    LikesObj["LikesTwo"].length > 0
      ? LikesObj["LikesTwo"][0]["data"]["likes"]
      : 0
  } likes this video)</span></h1>
</a>
<a href="./view.html"  id=${list[2].id} class="image_wrapper">
<img
src=${list[2].poster}
  alt=""
/>
<h1>${list[2].title} <span>(${
    LikesObj["LikesThree"].length > 0
      ? LikesObj["LikesThree"][0]["data"]["likes"]
      : 0
  } likes this video)</span></h1>
</a>
<a href="./view.html" id=${list[3].id} class="image_wrapper">
<img
src=${list[3].poster}
  alt=""
/>
<h1>
${list[3].title} <span>(${
    LikesObj["LikesFour"].length > 0
      ? LikesObj["LikesFour"][0]["data"]["likes"]
      : 0
  } likes this video)</span></span>
</h1>
</a>
</div>

<div class="button_wrapper">
  <a href=${link}> Check All </a>
</div>
</section>

`;
};
const GetData = (data) => {
  videos.forEach((EachVideoObj) => {
    let list1ID = EachVideoObj.list[0]["id"];
    let list2ID = EachVideoObj.list[1]["id"];
    let list3ID = EachVideoObj.list[2]["id"];
    let list4ID = EachVideoObj.list[3]["id"];

    let data1 = data.filter((EachObj) => EachObj.id == list1ID);
    let data2 = data.filter((EachObj) => EachObj.id == list2ID);
    let data3 = data.filter((EachObj) => EachObj.id == list3ID);
    let data4 = data.filter((EachObj) => EachObj.id == list4ID);

    let LikesObj = {
      LikesOne: data1,
      LikesTwo: data2,
      LikesThree: data3,
      LikesFour: data4,
    };

    console.log(LikesObj);

    VideosWrapper.insertAdjacentHTML(
      "beforeend",
      HTMLTEMPLATE(
        EachVideoObj.title,
        EachVideoObj.list,
        EachVideoObj.link,
        LikesObj
      )
    );
  });
};
// GetData();
getData();
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
