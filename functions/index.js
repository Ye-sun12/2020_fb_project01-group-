const functions = require('firebase-functions');
   
<body>
  
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
        {/* <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-database.js"></script>
    
    <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-analytics.js"></script>
    
    
      var auth, database, userInfo;
      var config = {
        apiKey: "AIzaSyDLxr0UL3qBEkeW1vdWNI3VuLV1ZVmN5UY",
        authDomain: "memo20201103.firebaseapp.com",
        databaseURL: "https://memo20201103.firebaseio.com",
        projectId: "memo20201103",
        storageBucket: "memo20201103.appspot.com",
        messagingSenderId: "337093264374",
        appId: "1:337093264374:web:1d020ae383278d6c623dd7",
        measurementId: "G-K41VDW7QG3"
      };
      
      firebase.initializeApp(config);
      firebase.analytics();
      database = firebase.database();
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result){
        var token = result. credential.accessToken;
        var user = result.user;
      }.catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });

      firebase.auth().signOut().then(function(){        
      }).catch(function(error){});

      function writeUserData(userId, name, email, number){
        firebase.database().ref('users/'+userId).set({
          username : name,
          email : email,
          number : number
        });
      } */}

      var userId = firebase.auth().currentUser.uid;
      return firebase.database().ref('/users/'+userId).once('value').then(function(snapshot){
        var username = (snapthot.val() && snapshot.val().username) || 'Anonymous';
      });

    
  </body>
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
