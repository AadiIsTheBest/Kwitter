function adduser(){
    username=document.getElementById("Text-Input").value;
    localStorage.setItem("username",username);
    window.location="kwitter_room.html";
    

}