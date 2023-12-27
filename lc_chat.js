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
    room_name=localStorage.getItem("room_name");
function send() {
      message=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:message,
            likes:0
      });
}    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
likes=message_data['likes'];
name_line="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_line="<h4 class='message_h4'>"+message+"</h4>";
likes_line="<button class='btn btn-warning' id="+firebase_message_id+" value="+likes+" onclick='likes(this.id)'>";
span_line="<span class='glyphicon glyphicon-thumbs-up'>Like:"+likes+"</span></button><hr>";
row=name_line+message_line+likes_line+span_line;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function likes(message_id){
      button_id=message_id;
      like=document.getElementById(button_id).value;
      updated_likes=Number(like)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            likes:updated_likes
      });
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}