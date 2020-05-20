function checkIfLoggedIn(){
    firebase.auth().onAuthStateChanged(function(user){
        if ( user ) {
            console.log('User signed in')
            // document.querySelector("#logged-in-as").innerHTML("logged in")
            console.log( user )
            var photoURL = user.photoURL

            // localStorage.setItem('photoURL', user.photoURL)
            // localStorage.setItem('email', user.email)
            // localStorage.setItem('uid', data.uid)

            document.getElementById('google-pic')
                .setAttribute('src', photoURL)
            
            // do logged in stuff
            document.getElementById('google-signin')
            .setAttribute('style', 'display: none; visibility: hidden')                    
            document.getElementById('signout')
            .setAttribute('style', 'display: inline-block; visibility: visible')                
        } else {
            console.log( 'User not signed in.' )
            // do not logged in stuff
            document.getElementById('google-signin')
            .setAttribute('style', 'display: inline-block; visibility: visible')
            document.getElementById('signout')
            .setAttribute('style', 'display: none; visibility: hidden')                
        }
    })

}
window.onload = function(){
    checkIfLoggedIn()
}

function signOut(){
    firebase.auth().signOut()
    localStorage.email = null;
    localStorage.photoURL = null;
    localStorage.uid = null;
    document.getElementById('google-pic')
    .setAttribute('src', '')
    
    // checkIfLoggedIn()
}

function signInWithGoogle(){
    var googleAuthProvider = new firebase.auth.GoogleAuthProvider
    
    firebase.auth().signInWithPopup(googleAuthProvider)
        .then( function(data) {
            console.log(data)
            // var photoURL = data.additionalUserInfo.profile.picture
            localStorage.setItem('photoURL', data.photoURL)
            localStorage.setItem('email', data.email)
            localStorage.setItem('uid', data.uid)
            document.getElementById('google-pic')
                    .setAttribute('src', photoURL)
                    
            // checkIfLoggedIn()
        })
        .catch( function(error) {
            console.log(error)
            // checkIfLoggedIn()
        })
}
