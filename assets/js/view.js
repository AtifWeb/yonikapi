let Ratings = document.querySelectorAll(".rating_wrapper span");

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
