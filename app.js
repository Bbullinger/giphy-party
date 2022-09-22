const gifContainer = document.querySelector("#gifContainer");
const gifSearch = document.querySelector("#gifSearch");
const userInput = document.querySelector("#userInput");
const removeGIFs = document.querySelector("#removeGIFs");

function createHTML(el) {
  return document.createElement(el);
}

//This function will search the giphy api for a gif, based off the param (user input from search form)
async function userSearch(search) {
  //MY GIPHY TOKEN: RqFMYNpWWi9Hx6MCuHcbN5XtL51yVjuR
  if (search) {
    const response = await axios.get(
      `http://api.giphy.com/v1/gifs/search?api_key=RqFMYNpWWi9Hx6MCuHcbN5XtL51yVjuR&q=${search}&limit=1`
    );

    let newImg = createHTML("img");

    newImg.setAttribute("id", response.data.data[0].images.original.url);
    newImg.src = response.data.data[0].images.original.url;
    gifContainer.append(newImg);
  }
}

gifSearch.addEventListener("submit", function (e) {
  e.preventDefault();
  userSearch(userInput.value);
  userInput.value = "";
});

removeGIFs.addEventListener("click", function () {});
