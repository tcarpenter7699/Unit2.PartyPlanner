let data = "";
const wrapper = document.getElementById("wrapper");

async function myFunction() {
  const response = await fetch(
    "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-WEB-ET-FTB-FT/events"
  );
  return await response.json();
}

console.log(myFunction());

myFunction().then((response) => {
  console.log(response.data);
  response.data.forEach((i) => {
    createEventCard(i);
  });
});

function createEventCard(info) {
  const ele = document.createElement("div");
  const nameEle = document.createElement("h2");
  const descEle = document.createElement("p");
  const delBut = document.createElement("button");
  nameEle.innerHTML = info.name;
  descEle.innerHTML = `Date: ${info.date}<br> Location:${info.location}<br> Description: ${info.description}<br>`;
  delBut.textContent = "Delete Event";
  delBut.addEventListener("click", async () => {
    await deleteApiEle(info.id);
    ele.remove();
  });
  ele.appendChild(nameEle);
  ele.appendChild(descEle);
  ele.appendChild(delBut);
  wrapper.appendChild(ele);
}
async function deleteApiEle(elementId) {
  myFunction().then((response) => {
    response.data.forEach((item) => {});
  });
}

function addParty(info) {
    const party = { name: "", date: "", location: "", description: "" };
    party.name = info.name
    party.date = info.date;
    party.location = info.location;
    party.description = info.description;
    state.parties.push(party);
  }
  
  document.getElementById("submit").addEventListener("click", () => {
    const nameVal = document.getElementById("nameInput").value;
    const dateVal = document.getElementById("dateInput").value;
    const locVal = document.getElementById("locInput").value;
    const desVal = document.getElementById("desInput").value;
    addParty({ name: nameVal, date: dateVal, location: locVal, description: desVal });
  });