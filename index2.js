// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDnXxGWrbACOlaMuvyv9jwLLvbDEoqqUC8",
  authDomain: "proyecto-final-1bc92.firebaseapp.com",
  databaseURL: "https://proyecto-final-1bc92-default-rtdb.firebaseio.com",
  projectId: "proyecto-final-1bc92",
  storageBucket: "proyecto-final-1bc92.appspot.com",
  messagingSenderId: "129950594906",
  appId: "1:129950594906:web:eccd0cedd86d933de26563",
  measurementId: "G-YWH3W1RP4R"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Set database variable
  var database = firebase.database()
  
  function save() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var username = document.getElementById('username').value
    var say_something = document.getElementById('say_something').value
    var favourite_food = document.getElementById('favourite_food').value
  
    database.ref('date/' + date).set({
      date : date,
      time : time,
      favourite_food : favourite_food
    })
  
    alert('Saved')
  }
  
  function get() {
    var username = document.getElementById('username').value
  
    var user_ref = database.ref('users/' + username)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()
  
      alert(data.email)
  
    })
  
  }
  
  function update() {
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
  
    var updates = {
      email : email,
      password : password
    }
  
    database.ref('users/' + username).update(updates)
  
    alert('updated')
  }
  
  function remove() {
    var username = document.getElementById('username').value
  
    database.ref('users/' + username).remove()
  
    alert('deleted')
  }
  