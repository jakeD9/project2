
// initialize firebase auth
var config = {
  apiKey: "AIzaSyCWat2b43WXa7yr8dZ4_aZ0WnyGPH-4dos",
  authDomain: "mybeer-8d95e.firebaseapp.com",
  databaseURL: "https://mybeer-8d95e.firebaseio.com",
  projectId: "mybeer-8d95e",
  storageBucket: "mybeer-8d95e.appspot.com",
  messagingSenderId: "222789239888"
};
// firebase.initializeApp(config);

// get page elements from login page
<<<<<<< HEAD
var emailTxt = $("#name");
var passTxt = $("#password");
var loginBtn = $("#log-in");
var createAct = $("#new-account");
var submitInput = $("#inputSubmit")
=======
const emailTxt = $("#name");
const passTxt = $("#password");
const loginBtn = $("#log-in");
const createAct = $("#new-account");
const beerBtn = $("#beer-btn");

>>>>>>> 36681e4e68701cebe1b63e756fb6c7fa2cf9d1b0

// The API object contains methods for each kind of request we'll make
var API = {
  newUser: function(user) {
    return $.ajax({
      type: "POST",
      url: "api/users",
      data: {'email': user}
    });
  },
  newBeer: function(beer_name, brewery, abv, user) {
    return $.ajax({
      type: "POST",
      url: "api/beerlist",
      data: {
        'beer_name': beer_name,
        'brewery': brewery,
        'abv': abv,
        'user': user
      }
    });
  }
};



// authenticate users that are registered in firebase and copy the user ID to session storage
loginBtn.on("click", (event) => {
  const email = emailTxt.val().trim();
  const pass = passTxt.val().trim();
  console.log(email);
  console.log(pass);
  const auth = firebase.auth();
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.then((res) => {
    // console.log(res)
    console.log("Logged in as: " + res.user.email)
    sessionStorage.setItem("user", res.user.email);
    // console.log(sessionStorage.getItem("user"));
    // API.newUser(sessionStorage.getItem("user"));
    window.location.replace("http://localhost:3000/mybeers");;
  });
  promise.catch((error) => {
    console.log(error);
  });
});

// writes a new user to firebase
createAct.on("click", (event) => {
  const email = emailTxt.val().trim();
  const pass = passTxt.val().trim();
  // console.log(email);
  // console.log(pass);
  const auth = firebase.auth();
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.then((res) => {
    console.log("New account created, please log in as: " + res.user.email)
    sessionStorage.setItem("user", res.user.email)
    API.newUser(sessionStorage.getItem("user"));
  });
  promise.catch((error) => console.log(error));
});

<<<<<<< HEAD

submitInput.on("click", (event) => {

  event.preventDefault();

  var beerInput = $("#inputBeer").val().trim();
  var breweryInput = $("#inputBrewery").val().trim();
  var locationInput = $("#inputLocation").val().trim();
  var commentInput = $("#inputComment").val().trim();

  console.log(beerInput);
  console.log(breweryInput);
  console.log(locationInput);
  console.log(commentInput);

$("#inputBeer").text(" ");

  // beerInput = "";
  // breweryInput = "";
  // locationInput = "";
  // commentInput = "";
});

// $(window).on('load', setTimeout(function() {
//   $("#flicker").show(".logo-nav-2-on");
//   $("#flicker").hide(".logo-nav-2-off");},
// 1000));
=======
beerBtn.on("click", (event) => {
  const beer_name = $("#inputBeer").val().trim();
  const brewery = $("#inputBrewery").val().trim();
  const abv = $("#inputAbv").val().trim();
  const user = sessionStorage.getItem("user");
  console.log(beer_name.toString(), brewery, abv, user.toString());
  API.newBeer(beer_name, brewery, abv, user);
});
>>>>>>> 36681e4e68701cebe1b63e756fb6c7fa2cf9d1b0
