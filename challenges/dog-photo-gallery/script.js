function setup() {
  let image = document.createElement("img");
  image.classList.add("dog-img");
  image.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVOnaNvkyBJnClMmrjaUTdqIg6GhSILQmdGQ&usqp=CAU";
  const listItem = document.createElement("li");
  listItem.setAttribute("id", "list-item");
  listItem.appendChild(image);
  let unorderedList = document.getElementById("unorded-list");
  unorderedList.appendChild(listItem);
}

const getDogBtnOne = document.getElementById("get-dog-btn-one");
getDogBtnOne.addEventListener("click", () => {
  fetchDogPhotos();
});

const getDogBtnTwo = document.getElementById("get-dog-btn-two");
getDogBtnTwo.addEventListener("click", () => {
  fetchDogPhotos();
});

let loading = false;

const fetchDogPhotos = async () => {
  try {
    let errorMessage = document.getElementsByClassName(".error-message");
    errorMessage.innerText = "";

    if (loading) {
      console.log("Loading...");
    }

    loading = true;
    let loadingElement = document.getElementsByClassName(".loading");
    loadingElement.innerText = "Loading...";

    const res = await fetch("https://dog.ceo/api/breeds/image/random");

    if (res.status === 404) throw new Error("Cannot find dog image!");

    const data = await res.json();

    let image = document.createElement("img");
    image.classList.add("dog-img");
    image.src = data.message;

    let listItem = document.getElementById("list-item");
    listItem.appendChild(image);

    let unorderedList = document.getElementById("unorded-list");
    unorderedList.appendChild(listItem);

    loading = false;
    loadingElement.innerText = "";
  } catch (error) {
    loading = false;
    let loadingElement = document.getElementsByClassName(".loading");
    loadingElement.innerText = "";
    console.log("Cannot find dog image", error);
  }
};

window.onload = setup;
