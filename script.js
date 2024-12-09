//API Used - Planets by ApiNinjas

button = document.querySelector(".top-left-button");
content = document.querySelector(".content");
let search = document.querySelector(".top-left-input");

let planetsearch;

function capitalizeFirstLetter(string) {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}

button.addEventListener("click", async (event) => {
  content.innerHTML = "";
  event.preventDefault();
  if (search.value === "") {
    alert("No name, no fame - even in space! 🤣🤣");
    return;
  }
  planetsearch = capitalizeFirstLetter(search.value);
  search.value = "";

  const url = `https://planets-by-api-ninjas.p.rapidapi.com/v1/planets?name=${planetsearch}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "9593ce1779msh018a772957ac2d2p1f1c40jsn6ada0193d77b",
      "x-rapidapi-host": "planets-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const planetobjectinfo = await response.json();
    if (planetobjectinfo && planetobjectinfo.length > 0) {
      let planetinfo = Object.entries(planetobjectinfo[0]);
      planetinfo.forEach((element) => {
        content.innerHTML += `<div class="info"><pre>${capitalizeFirstLetter(element[0])}  -  ${element[1]}</pre></div>`;
      });
    } else {
      content.innerHTML = "<div class='info'>We'll add this Soon</div>";
    }
  } catch (error) {
    console.error("Error fetching planet data:", error);
  }
});