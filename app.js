function createHTML(el) {
  return document.createElement(el);
}
async function userSearch(search.value) {
  console.log("test");
  const response = await axios.get(
    `http://api.giphy.com/v1/gifs/search?api_key=RqFMYNpWWi9Hx6MCuHcbN5XtL51yVjuR&q=${search.value}&limit=5`
  );
  console.log(response);
}

//MY GIPHY TOKEN: RqFMYNpWWi9Hx6MCuHcbN5XtL51yVjuR
