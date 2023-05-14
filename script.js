const body = document.querySelector("body");
var r = document.querySelector(':root');
var toggle = document.getElementById("mode");
sidenav = body.querySelector(".side-nav");

//Dark Mode Function
if (toggle != null) {
  toggle.onclick = function() {
    this.classList.toggle('dark');
    if (this.classList.toggle("light")) {
      toggle.innerHTML = toggle.innerHTML.replace('Light', 'Dark');
      document.documentElement.style.setProperty("--sidebar-color", "#E6E18F");
      document.documentElement.style.setProperty("--background-color", "#FFFAE2");
      document.documentElement.style.setProperty("--font-color", "black");
      document.documentElement.style.setProperty("--header-color", "#EADDA6");
      document.documentElement.style.setProperty("--footer-color", "#92977E");
    } else {
      toggle.innerHTML = toggle.innerHTML.replace('Dark', 'Light');
      document.documentElement.style.setProperty("--sidebar-color", "#44355B");
      document.documentElement.style.setProperty("--background-color", "#221E22");
      document.documentElement.style.setProperty("--font-color", "white");
      document.documentElement.style.setProperty("--header-color", "#B09398");
      document.documentElement.style.setProperty("--footer-color", "#31263E");
    }
  }
}
//Welcome Message
var welcomeMsg = document.getElementById("welcome-msg");
if (welcomeMsg != null) {
  if (localStorage.getItem("username") != null) {
    welcomeMsg.innerHTML = "Welcome back, " + localStorage.getItem("username");
  } else {
    welcomeMsg.innerHTML = "Welcome to Goodreads!";
  }
}

//Review Function 1
var reviewSubmitButton = document.getElementById("review-submit");
var reviewInput = document.getElementById("review-input");
var reviewList = document.getElementById("review-list");
if (reviewSubmitButton != null) {
  reviewSubmitButton.addEventListener('click', (event) => {
    if (reviewInput.value != "") {
      event.preventDefault();
      const newList = document.createElement('li');
      if (localStorage.getItem("username") != null) {
        newList.innerHTML = localStorage.getItem("username") + ": " + reviewInput.value;
      } else {
        newList.innerHTML = "Guest: " + reviewInput.value;
      }
      reviewList.appendChild(newList);
      reviewInput.value = "";
    }
  });
}

// Admin Functions
var mainList = document.getElementById("book-list");
var select = document.getElementById('selector');
var first = -1;
// If first time loading, set the "first" index to -1
if (localStorage.getItem("first") == null) {
  localStorage.setItem("first", -1);
}

// Load "first" index
first = localStorage.getItem("first");

// If first time loading, save the order of the books
if (localStorage.getItem("great-order") == null) {
  localStorage.setItem("great-order", 1);
  localStorage.setItem("diary-order", 2);
  localStorage.setItem("end-order", 3);
  localStorage.setItem("age-order", 4);
  localStorage.setItem("martian-order", 5);
}

// Set first page order
document.documentElement.style.setProperty("--great-pos", localStorage.getItem("great-order"));
document.documentElement.style.setProperty("--diary-pos", localStorage.getItem("diary-order"));
document.documentElement.style.setProperty("--end-pos", localStorage.getItem("end-order"));
document.documentElement.style.setProperty("--age-pos", localStorage.getItem("age-order"));
document.documentElement.style.setProperty("--martian-pos", localStorage.getItem("martian-order"));

// If user is not "admin", hide top book selector
if (localStorage.getItem("username") != null &&
  document.getElementById("admin-selector") != null) {
  if (localStorage.getItem("username") == "admin") {
    document.getElementById("admin-selector").style.display = "block";
  } else {
    document.getElementById("admin-selector").style.display = "none";
  }
} else if (document.getElementById("admin-selector") != null) {
  document.getElementById("admin-selector").style.display = "none";
}

// Selector changes position of selected book to first
if (select != null && localStorage.getItem("username") != null) {
  if (localStorage.getItem("username") == "admin") {
    select.addEventListener('change', function() {
      if (select.value == "great") {
        document.documentElement.style.setProperty("--great-pos", first);
        localStorage.setItem("great-order", first);
        first = first - 1;
      }
      if (select.value == "diary") {
        document.documentElement.style.setProperty("--diary-pos", first);
        localStorage.setItem("diary-order", first);
        first = first - 1;
      }
      if (select.value == "end") {
        document.documentElement.style.setProperty("--end-pos", first);
        localStorage.setItem("end-order", first);
        first = first - 1;
      }
      if (select.value == "age") {
        document.documentElement.style.setProperty("--age-pos", first);
        localStorage.setItem("age-order", first);
        first = first - 1;
      }
      if (select.value == "martian") {
        document.documentElement.style.setProperty("--martian-pos", first);
        localStorage.setItem("martian-order", first);
        first = first - 1;
      }
    });
  }
}


/*
IM   Reading about this json conversion cause it currently requires 2 f'ing files to do, at least from lecture, ok f'it ima just do the 2 files shit gonna burn all braincells tho, cause we have to change it too
*/

/*
//Review Function 2
var reviewSubmitButtonField = document.getElementById("review-submit");
var reviewUsernameField = document.getElementById("review-username");
var reviewInputField = document.getElementById("review-input");
var reviewListField = document.getElementById("review-list");
if (reviewSubmitButton != null) {
  reviewSubmitButtonField.addEventListener("click", submitMessage);
}
window.addEventListener("DOMContentLoaded",loadPage);


function submitMessage(){
    addNewMessage(reviewUsernameField.value, reviewInput.value);
    updateList();
}
fg
function updateList(){
  msgList = "<ul>"
    usersArray = getUsers();
    for(nextUser of usersArray){
        msgList += "<li>" + nextUser;
        msgList += " says: " +getMessage(nextUser)+ "</li>";
    }
    msgList += "</ul>"
    messagesField.innerHTML = msgList;
    jsonField.innerHTML = getRawJSON();
  this is where the assualt starts
}

function loadpage(){
  ;
}
*/


//Login Page 
/*
const bookList = document.getElementById('book-list');
const nameInput = document.querySelector("name-input");
const loginButton = document.querySelector("login-button");
if (loginButton != null) {
  loginButton.addEventListener("click", addUser);
  loginButton.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      addUser();
    }
  });
}
*/ /*
function addUser() {
  userName = nameInput.value;
  if (userName === "admin") { */
/*how to make admin privileges*/ /*
Sortable.create(bookList);
}
}
*/


//Login Page New Work

const submitButtonOne = document.getElementById("login-button");
if (submitButtonOne != null) {
  submitButtonOne.addEventListener("click", submitJustUser);
  if (localStorage.getItem("username") != null) {
    document.getElementById("username-output").innerHTML = "Logged in as: " + localStorage.getItem("username");
  } else {
    document.getElementById("username-output").innerHTML = "Logged in as: Guest";
  }
}

function submitJustUser() {
  var nameFieldOne = document.getElementById("name-input").value;
  localStorage.setItem("username", nameFieldOne);
  document.getElementById("username-output").innerHTML = "Logged in as: " + localStorage.getItem("username");
}

/*
const loginPageOpen = document.getElementById("username-output");
if (loginPageOpen != null){
  window.addEventListener("DOMContentLoaded", loadLoginPage);
}

function loadLoginPage() {
  if (window.localStorage.getItem("username") === null) {
    localStorage.setItem("username", "Guest");
    document.getElementById("username-output").innerHTML = "Logged in as: " + window.localStorage.getItem("username");
  }
  else{
    document.getElementById("username-output").innerHTML = "Logged in as: " + window.localStorage.getItem("username");
  }
}
*/

//Review
const reviews = {};
function addNewMessage(newName, newText) {
  reviews[newName] = newText;
  storeData();
}

