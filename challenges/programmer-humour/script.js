let catchErrorElem = document.getElementsByClassName(".catch-error");
catchErrorElem.innerText = "";

const getImage = async () => {
  try {
    const res = await fetch("https://xkcd.vercel.app/?comic=latest");
    const data = await res.json();

    let image = document.getElementById("image");

    image.src = data.img;
  } catch (error) {
    catchErrorElem.innerText = error;
  }
};

window.onload = getImage;
