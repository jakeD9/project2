
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
var emailTxt = $("#name");
var passTxt = $("#password");
var loginBtn = $("#log-in");
var createAct = $("#new-account");
var submitInput = $("#inputSubmit")

// The API object contains methods for each kind of request we'll make
var API = {
  newUser: function(example) {
    return $.ajax({
      type: "POST",
      url: "api/users",
      data: JSON.stringify(example)
    });
  },
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
    console.log(res.user.email)
    sessionStorage.setItem("user", res.user.email);
    console.log(sessionStorage.getItem("user"));
    API.newUser(sessionStorage.getItem("user"));
  });
  promise.catch((error) => {
    console.log(error);
  });
});

// writes a new user to firebase
createAct.on("click", (event) => {
  const email = emailTxt.val().trim();
  const pass = passTxt.val().trim();
  console.log(email);
  console.log(pass);
  const auth = firebase.auth();
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.then((user) => console.log(user));
  promise.catch((error) => console.log(error));
});


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