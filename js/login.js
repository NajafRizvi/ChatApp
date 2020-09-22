const facebook_login = ()=>{
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result)=> {
        // The signed-in user info.
        window.location.assign("chat.html")
        
      })
      .catch(function(error) {
       console.log(error)
      });
}