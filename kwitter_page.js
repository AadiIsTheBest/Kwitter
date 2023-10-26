
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
    roomname=localStorage.getItem("roomname");
    function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.HTML";
      
    }
    function send(){
      msg=document.getElementById("inputbox1").value;
      firebase.database().ref(roomname).push({
            name:username,
            message:msg,
            like:0
      });
      document.getElementById("inputbox1").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();
