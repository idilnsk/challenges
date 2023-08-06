console.clear();

const url = "https://swapi.dev/api/people";
async function fetchData() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data["results"][2]["eye color"]);
    } else {
      console.error("bad response");
    }
  } catch (error) {
    console.error("an error occured");
  }
  fetchData();
}
