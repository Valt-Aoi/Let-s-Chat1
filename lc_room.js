const firebaseConfig = {
      apiKey: "AIzaSyDiA9p-CkQxo-C4PwDptrcBmMEaRX3wqAE",
      authDomain: "kwitter-43453.firebaseapp.com",
      databaseURL: "https://kwitter-43453-default-rtdb.firebaseio.com",
      projectId: "kwitter-43453",
      storageBucket: "kwitter-43453.appspot.com",
      messagingSenderId: "617243889582",
      appId: "1:617243889582:web:309c5c0b9d3d577fec423f"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("username");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
    function addroom(){
      roomname=document.getElementById("room_name").value;
      localStorage.setItem("room_name",roomname);
      firebase.database().ref("/").child(roomname).update({
            purpose:"add room name"
      });
      window.location="kwitter_page.html";
    } 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";     
}
function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html"; 
}