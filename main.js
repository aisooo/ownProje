function sendRequest() {
  let input = document.getElementById("input").value;
  console.log(input);

  let ApiKey = "8574c95d949f4bfcbfd507e384e8ce9d";
  let ApiUrl = `https://api.giphy.com/v1/gifs/search?q=${input}&rating=g&api_key=${ApiKey}`;

  fetch(ApiUrl)
    .then(function (data) {
      return data.json();
    })
    .then(function (json) {
      console.log(json.data[0].images.fixed_height.url);
      let imgPath = json.data[0].images.fixed_height.url;
      let img = document.createElement("img");
      img.setAttribute("src", imgPath);
      document.body.appendChild(img);
    });
}
