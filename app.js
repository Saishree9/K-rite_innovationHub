// -------------------------teams------------------------------
const teams = [
  {
    icon: `<i class="fa fa-pencil" aria-hidden="true"></i>`,
    teamName: "Designing team",
  },
  {
    icon: `<i class="fa fa-volume-up" aria-hidden="true"></i>`,
    teamName: "Marketing team",
  },
  {
    icon: `<>`,
    teamName: "Development team",
  },
];
function navBar() {
  const sideBar = document.getElementById("sideBar");
  const listItems = teams.map((team) => {
    return `<li class="teamList">${team.icon} ${team.teamName}</li>`;
  });

  sideBar.innerHTML = `<ul>${listItems.join("")}</ul>`;
}
navBar();

// -------------------------products------------------------------
const products = ["Roadmap", "Feedback", "Performance", "Team", "Analytics"];
let isProductsListShown = false;

function toggleProductsList() {
  const folder = document.getElementById("products");
  const toggleIcon = document.getElementById("toggleIcon1");

  const btn = () => {
    return `<li class="button"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Add New Folder</li>`;
  };

  if (isProductsListShown) {
    folder.innerHTML = ""; // Clear the list
    toggleIcon.classList.remove("fa-sort-asc");
    toggleIcon.classList.add("fa-sort-desc");
  } else {
    const listItems = products.map((product) => `<li>${product}</li>`);
    folder.innerHTML = `<ul>${listItems.join('')} ${btn()} </ul>`;
    toggleIcon.classList.remove("fa-sort-desc");
    toggleIcon.classList.add("fa-sort-asc");
  }

  isProductsListShown = !isProductsListShown;
}

// -------------------------sales------------------------------

const sales = ["sales 1", "sales 2"];
let isSalesListShown = false;

function salesList() {
  const folder = document.getElementById("sales");
  const toggleIcon = document.getElementById("toggleIcon2");

  const btn = () => {
    return `<li class="button"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Add New Folder</li>`;
  };
  
  if (isSalesListShown) {
    folder.innerHTML = ""; // Clear the list
    toggleIcon.classList.remove("fa-sort-asc");
    toggleIcon.classList.add("fa-sort-desc");
  } else {
    const listItems = sales.map((product) => `<li>${product}</li>`);
    folder.innerHTML = `<ul>${listItems.join('')} ${btn()} </ul>`;
    toggleIcon.classList.remove("fa-sort-desc");
    toggleIcon.classList.add("fa-sort-asc");
  }

  isSalesListShown = !isSalesListShown;
  
  folder.innerHTML = `<ul>${listItems.join("")} ${btn()} </ul>`;
}

// -------------------------notes------------------------------

const note = [
  {
    icon: `<i class="fa fa-users" aria-hidden="true"></i>`,
    teamName: "Invite teammates",
  },
  {
    icon: `<i class="fa fa-info-circle" aria-hidden="true"></i>`,
    teamName: "Help and first steps",
  },
  {
    icon: ``,
    teamName: "7 days left on Trial",
  },
];

function noteBar() {
  const noteBar = document.getElementById("noteBar");
  const listItems = note.map((team) => {
    return `<li class="teamList">${team.icon} ${team.teamName}</li>`;
  });

  noteBar.innerHTML = `<ul>${listItems.join("")}</ul>`;
}
noteBar();

const table = [
  {
    checkbox: `<input type="checkbox" />`,
    BrandLogo: `./images/wix.png`,
    Brand: `Wix`,
    Description: `Develop a personalised fit...`,
    Members: `<i class="fa fa-user" aria-hidden="true"></i> <i class="fa fa-users" aria-hidden="true"></i>`,
    Categories: `Automation`,
    Tags: `#digitalTransformation`,
    Next_meeting: `in 30 minutes`,
  },
  {
    checkbox: `<input type="checkbox" />`,
    BrandLogo: `./images/shopify.png`,
    Brand: `Shopify`,
    Description: `Lorem ipsum, dolor sit amet ...`,
    Members: `<i class="fa fa-user" aria-hidden="true"></i> <i class="fa fa-user-md" aria-hidden="true"></i>`,
    Categories: `E-commerce`,
    Tags: `#digitalTransformation`,
    Next_meeting: `in 10 secs`,
  },
  {
    checkbox: `<input type="checkbox" />`,
    BrandLogo: `./images/download.png`,
    Brand: `MailChimp`,
    Description: `consectetur adipisicing elit...`,
    Members: `<i class="fa fa-user" aria-hidden="true"></i>`,
    Categories: `SAAS`,
    Tags: `#digitalTransformation`,
    Next_meeting: `in 30 minutes`,
  },
  {
    checkbox: `<input type="checkbox" />`,
    BrandLogo: `./images/paypal.png`,
    Brand: `Paypal`,
    Description: `Placeat beatae dolorem...`,
    Members: `<i class="fa fa-user" aria-hidden="true"></i> <i class="fa fa-users" aria-hidden="true"></i>`,
    Categories: `Mobile`,
    Tags: `#digitalTransformation`,
    Next_meeting: `in 24 hours`,
  },
  {
    checkbox: `<input type="checkbox" />`,
    BrandLogo: `./images/disney.jpg`,
    Brand: `Disney`,
    Description: `iusto maxime repellendus...`,
    Members: `<i class="fa fa-user" aria-hidden="true"></i> <i class="fa fa-user-md" aria-hidden="true"></i>`,
    Categories: `Entertainment`,
    Tags: `#digitalTransformation`,
    Next_meeting: `in 30 minutes`,
  },
  {
    checkbox: `<input type="checkbox" />`,
    BrandLogo: `./images/google.png`,
    Brand: `Google`,
    Description: `magni sapiente nobis ame...`,
    Members: `<i class="fa fa-user" aria-hidden="true"></i> <i class="fa fa-users" aria-hidden="true"></i>`,
    Categories: `technology`,
    Tags: `#digitalTransformation`,
    Next_meeting: `No contact`,
  },
  {
    checkbox: `<input type="checkbox" />`,
    BrandLogo: `./images/download.png`,
    Brand: `MailChimp`,
    Description: `consectetur adipisicing elit...`,
    Members: `<i class="fa fa-user" aria-hidden="true"></i>`,
    Categories: `Publishing`,
    Tags: `#digitalTransformation`,
    Next_meeting: `in 30 minutes`,
  },
  {
    checkbox: `<input type="checkbox" />`,
    BrandLogo: `./images/paypal.png`,
    Brand: `Paypal`,
    Description: `Placeat beatae dolorem...`,
    Members: `<i class="fa fa-user" aria-hidden="true"></i> <i class="fa fa-users" aria-hidden="true"></i> <i class="fa fa-user-md" aria-hidden="true"></i>`,
    Categories: `Transaction`,
    Tags: `#digitalTransformation`,
    Next_meeting: `in 6 hours`,
  },
  {
    checkbox: `<input type="checkbox" />`,
    BrandLogo: `./images/disney.jpg`,
    Brand: `Disney`,
    Description: `iusto maxime repellendus...`,
    Members: `<i class="fa fa-user" aria-hidden="true"></i>`,
    Categories: `Web service`,
    Tags: `#digitalTransformation`,
    Next_meeting: `No contact`,
  },
];

function search() {
  let content = document.getElementById("content");
  let searchText = document.getElementById("searchText").value.toLowerCase();
  let newArr = table;
  if (searchText.trim() !== "") {
    newArr = table.filter((item) =>
      item.Brand.toLowerCase().includes(searchText)
    );
  }
  let tableItem = newArr.map((tab) => {
    return `<tr>
        <td style="width: 5%; text-align: center;">${tab.checkbox}</td>
        <td><img src="${tab.BrandLogo}" class="tabImg"> ${tab.Brand}</td>
        <td>${tab.Description}</td>
        <td style="width: 5%; text-align: center;">${tab.Members}</td>
        <td><button>${tab.Categories}</button></td>
        <td><button  class="greyText">${tab.Tags}</button></td>
        <td><button>${tab.Next_meeting}</button></td>
      </tr>`;
  });
  content.innerHTML = `${tableItem.join("")}`;
}
search();
