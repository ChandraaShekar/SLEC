// import { firebase } from "https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js";

var fdb = firebase.firestore();
function addToCart(itemKey, quantity, userId){
    console.log(itemKey);
    console.log(quantity);
    console.log(userId);
    if (localStorage.uid != "null") {
        fdb.collection('cart').add({
            "itemKey": itemKey,
            "quantity": quantity,
            "added_by": userId
        }).then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
    } else {
        alert("You need to login to access this feature");
    }
}