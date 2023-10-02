
var firebaseConfig = {
      apiKey: "AIzaSyD1CQ7MHVxLbLJkl1UbF6euZ41D2mHJh_8",
      authDomain: "kwitter-eb970.firebaseapp.com",
      databaseURL: "https://kwitter-eb970-default-rtdb.firebaseio.com",
      projectId: "kwitter-eb970",
      storageBucket: "kwitter-eb970.appspot.com",
      messagingSenderId: "457748063019",
      appId: "1:457748063019:web:4de7e5f852a645e81f1b6e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username");
    document.getElementById("user_name").innerHTML="Welcome "+username+" ! ";



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
