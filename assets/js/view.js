let Ratings = document.querySelectorAll(".rating_wrapper span");
import { db } from "../db/config.js";
window.addEventListener("load", (e) => {
  let VideoTemplate = (id) => {
    return `
    <div class="video_wrapper">
    <iframe
      width="560"
      height="315"
      src=${id}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
    `;
  };

  let GetDataValue = window.sessionStorage.getItem("Data");
  if (GetDataValue == null) {
    window.history.back();
  } else {
    let jsonParse = JSON.parse(GetDataValue);
    let title = jsonParse.title;
    let desc = jsonParse.desc;
    let videos = jsonParse.videos;
    let id = jsonParse.id;
    let likes;
    let dislikes;

    var docRef = db.collection("Articles").doc(id);
    window.sessionStorage.setItem("id", id);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          likes = doc.data().likes;
          dislikes = doc.data().dislikes;

          document.querySelector(".rating_wrapper > p").innerHTML = `(${
            likes + dislikes
          })`;

          window.sessionStorage.setItem("likes", likes);
          window.sessionStorage.setItem("dislikes", dislikes);
        } else {
          document.querySelector(".rating_wrapper > p").innerHTML = `(0)`;
          window.sessionStorage.setItem("likes", 0);
          window.sessionStorage.setItem("dislikes", 0);

          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

    console.log(jsonParse);

    let HeadingArea = document.querySelector(".heading span");
    let Description = document.querySelector(".desc");
    let video_area = document.querySelector(".video_area");

    HeadingArea.textContent = title;
    Description.textContent = desc;

    videos.forEach((EachVideo) => {
      video_area.insertAdjacentHTML("beforeend", VideoTemplate(EachVideo));
    });
  }

  Ratings.forEach((EachRating) => {
    EachRating.addEventListener("click", (e) => {
      let icon = e.target.querySelector("i");
      let Data = window.sessionStorage.getItem("Data");

      let JSONPARSE = JSON.parse(Data);
      let JSONPARSE_ID = JSONPARSE["id"];

      var ArticlesRef = db.collection("Articles");
      let likes = window.sessionStorage.getItem("likes");
      let dislikes = window.sessionStorage.getItem("dislikes");
      let id = window.sessionStorage.getItem("id");
      if (e.target.querySelector("i").classList.contains("fa-thumbs-down")) {
        ArticlesRef.doc(id)
          .set({
            likes: Number(likes),
            dislikes: Number(dislikes) + 1,
          })
          .then((res) => {
            window.location.reload();
          });
      } else {
        ArticlesRef.doc(id)
          .set({
            likes: Number(likes) + 1,
            dislikes: Number(dislikes),
          })
          .then((res) => {
            window.location.reload();
          });
      }

      let GolbalActive = e.target
        .closest(".rating_wrapper")
        .querySelector("i.active");
      if (GolbalActive) {
        if (icon.classList[1] == GolbalActive.classList[1]) {
          icon.classList.remove("active");
        } else {
          GolbalActive.classList.remove("active");
          icon.classList.add("active");
        }
      } else {
        icon.classList.add("active");
      }
    });
  });
});
