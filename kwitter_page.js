//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyD9AVRiS2X_LGbYjnUNZrDROeDNotzphBI",
      authDomain: "kwitter-6299d.firebaseapp.com",
      databaseURL: "https://kwitter-6299d-default-rtdb.firebaseio.com",
      projectId: "kwitter-6299d",
      storageBucket: "kwitter-6299d.appspot.com",
      messagingSenderId: "1008794435860",
      appId: "1:1008794435860:web:a1684b85b3d38c990c0201"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
})
document.getElementById("msg").value="";
}