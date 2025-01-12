// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRYMjPfAcnr962w63Kw1CylPdebcDue8o",
  authDomain: "project1-a5013.firebaseapp.com",
  databaseURL:
    "https://project1-a5013-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project1-a5013",
  storageBucket: "project1-a5013.firebasestorage.app",
  messagingSenderId: "113250581902",
  appId: "1:113250581902:web:a49d812dc2ac0fa15cf8df",
};
firebase.initializeApp(firebaseConfig);

function addItem() {
  var item = document.getElementById("input").value;
  //  const row = "<div>" + item + "</div>";
  //  document.getElementById("info").innerHTML += row;
  firebase
    .database()
    .ref("/")
    .child(item)
    .update({ purpose: "adding message" });
  getData();
}
function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("info").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childkey = childSnapshot.key;
        item = childkey;
        console.log(item);
        var row = "<div>" + item + "</div><hr>";
        document.getElementById("info").innerHTML += row;
      });
    });
}
function removeItem() {
  data = document.getElementById("input").value;
  firebase.database().ref("/").child(data).remove();
}
