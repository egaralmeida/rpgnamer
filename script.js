let dataJson;

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => generateName(data));

function generateName(data) {
  dataJson = data;

  document.getElementById("prefix").textContent =
    data.prefixes[Math.floor(Math.random() * data.prefixes.length)].text;

  document.getElementById("item").textContent =
    data.items[Math.floor(Math.random() * data.items.length)].text;

  document.getElementById("suffix").textContent =
    data.suffixes[Math.floor(Math.random() * data.suffixes.length)].text;
}

$(document).ready(function () {
  $(".item--em").click(function () {
    generateName(dataJson);
  });
});
