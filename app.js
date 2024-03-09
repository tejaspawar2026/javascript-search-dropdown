let districts = [
  "Ahmednagar",
  "Akola",
  "Amravati",
  "Chatrapati Sambhajinagar",
  "Beed",
  "Bhandara",
  "Buldhana",
  "Chandrapur",
  "Dhule",
  "Gadchiroli",
  "Gondia",
  "Hingoli",
  "Jalgaon",
  "Jalna",
  "Kolhapur",
  "Latur",
  "Mumbai City",
  "Mumbai Suburban",
  "Nagpur",
  "Nanded",
  "Nandurbar",
  "Nashik",
  "Dharashiv",
  "Palghar",
  "Parbhani",
  "Pune",
  "Raigad",
  "Ratnagiri",
  "Sangli",
  "Satara",
  "Sindhudurg",
  "Solapur",
  "Thane",
  "Wardha",
  "Washim",
  "Yavatmal",
];

let container = document.querySelector(".container");
let selectBtn = container.querySelector(".select-option");
let dropDownList = container.querySelector(".list-search-container");
let searchInput = container.querySelector("#search");
let lists = dropDownList.querySelector(".list");

selectBtn.addEventListener("click", () => {
  container.classList.toggle("active");
});

function addDistrict(selectedDistrict) {
  lists.innerHTML = "";
  districts.forEach((district) => {
    let isSelected = selectedDistrict == district ? "selected" : "";
    let listItem = '<li class="'+ isSelected +'">' + district + "</li>";
    lists.insertAdjacentHTML("beforeend", listItem);
  });
  addClickEventToLi();
}
addDistrict();

function addClickEventToLi() {
  lists.querySelectorAll("li").forEach((listItem) => {
    listItem.addEventListener("click", () => {
      updateSelectDistrict(listItem);
    });
  });
}

function updateSelectDistrict(listItem) {
  searchInput.value = "";
  selectBtn.firstElementChild.innerHTML = listItem.innerHTML;
  container.classList.remove("active");
  addDistrict(listItem.innerHTML);
}

searchInput.addEventListener("keyup", () => {
  let searchInpValue = searchInput.value.toLowerCase();
  let filteredDistricts = districts
    .filter((district) => {
      return district.toLocaleLowerCase().startsWith(searchInpValue);
    })
    .map((district) => {
      let listItem = "<li>" + district + "</li>";
      return listItem;
    })
    .join("");
  lists.innerHTML = filteredDistricts;
  addClickEventToLi();
});
