import posts from "./data.js";

const posting = document.getElementById("ig-page");

let renderPost = () => {
  let content = " ";
  for (let i = 0; i < posts.length; i++) {
    content += `
    <div class="post--container">
      <img
        class="post--avatar"
        src="${posts[i].avatar}"
        alt="${posts[i].name}"
      />
      <div class="post--details">
        <h3 class="avatar--name">${posts[i].name}</h3>
        <p class="location">${posts[i].location}</p>
      </div>
    </div>
    <div >
      <img class="post--img" src="${posts[i].post}" alt="${posts[i].name}" style="width: 792px;height: 792px;" />
    </div>
    <div class="icon--container">
      <img logo class="icon--logo" id="heart" src="./images/icon-heart.png" alt="" />
      <img logo class="icon--logo hidden" id="heart--filled" src="./images/icon-heart-filled.png" alt="" />

      <img class="icon--logo" src="./images/icon-comment.png" alt="" />
      <img class="icon--logo" src="./images/icon-dm.png" alt="" />
    </div>
    <p class="likes" ><span id="likes">${posts[i].likes}</span> likes</p> 
    <p class="comment">
      <span>${posts[i].username}</span> ${posts[i].comment}
    </p>
  `;
  }
  posting.innerHTML = content;

  // For Loop enables enables displayLikes func to be run on all the different iterations of the post Array
  for (let i = 0; i < posts.length; i++) {
    displayLikes(i);
  }
};

function displayColoredHeart(color, noColor) {
  noColor.classList.add("hidden");
  color.classList.remove("hidden");
}

function hideColoredHeart(color, noColor) {
  noColor.classList.remove("hidden");
  color.classList.add("hidden");
}

function addLike(likesCount) {
  let numLikes = parseInt(likesCount.textContent);
  numLikes++;
  likesCount.textContent = numLikes.toString();
}

function removeLikes(likesCount) {
  let numLikes = parseInt(likesCount.textContent);
  numLikes--;
  likesCount.textContent = numLikes.toString();
}

function displayLikes(i) {
  const heartBtn = document.querySelectorAll("#heart")[i];
  const likesCount = document.querySelectorAll("#likes")[i];
  const heartBtnFilled = document.querySelectorAll("#heart--filled")[i];
  const poster = document.querySelectorAll(".post--img")[i];
  let isLiked = false;

  heartBtn.addEventListener("click", () => {
    console.log("Heart Shown");
    addLike(likesCount);
    displayColoredHeart(heartBtnFilled, heartBtn);
    isLiked = true;
  });

  heartBtnFilled.addEventListener("click", () => {
    console.log("Heart Hidden");
    removeLikes(likesCount);
    hideColoredHeart(heartBtnFilled, heartBtn);
    isLiked = false;
  });

  poster.addEventListener("dblclick", () => {
    console.log("Double Clicked");
    if (isLiked === false) {
      addLike(likesCount);
      displayColoredHeart(heartBtnFilled, heartBtn);
      isLiked = true;
    } else {
      removeLikes(likesCount);
      hideColoredHeart(heartBtnFilled, heartBtn);
      isLiked = false;
    }
  });
}

renderPost();
