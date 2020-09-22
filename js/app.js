window.onload = function(){
    ShowMessage()
    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
        
}
console.log(name)

    
}
let message_area = document.getElementById("message_area")
var message_textbox = document.getElementById("message_textbox")
var date = new Date();
var User_name = document.getElementById("User_name");
var user
function ShowMessage() {
    var rootRef = firebase.database().ref().child("Message")
    rootRef.on("child_added",snap=>{
        
        let html = `<li>
        <span class="chat-img pull-left">
        <img src="http://placehold.it/50/55C1E7/fff&text=U"class="img-circle" />
        </span>
        <div class="header">
            <strong class="sender" >${snap.child("Sender").val()}</strong> 
        </div>
        <div class="row justify-content-center mt-5 p-4">
            <div class="col-md-10 col-lg-8 col-8">
                <div class="alert alert-message" role="alert">
                    <p>${snap.child("Message").val()}</p>
                </div>
            </div>
        </div>
        
    </li>`
    message_area.innerHTML+= html
    })
}
Send.addEventListener("click", function (e) {
    e.preventDefault()
    if(User_name.value == ""){
        alert("User Name Required");
    }
    else if(message_textbox.value == ""){
        alert("Plase type ypur message");
    }
    else{
        firebase.database().ref("Message").push().set({
            "Sender": User_name.value,
            "Message": message_textbox.value
        })
        message_textbox.value = ""
        User_name.value = ""
    }
})
function login(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(()=> {
        // The signed-in user info.
        window.location.assign("login.html")
      })
      .catch(function(error) {
       console.log(error)
      });
}
logout = ()=>{
    firebase.auth().signOut().then(function() {
        console.log("successful")
        window.location.assign("login.html")
      }).catch(function(error) {
        console.log(error)
      });
}
