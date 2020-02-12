/*$('#button').click(() => {
db.collection("users")
    .add({
        subject: $('#subject').val(),
        credit: '3',
        grade: Number($('#grade').val()),
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        $('#subject').val('')
        $('#grade').val('')
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
})
/*db.collection('users').orderBy("subject").onSnapshot(doc => {
        let table = $('tbody')[0]
        $("tbody tr").remove()
        gpa = 0
        credit = 0
        //document.querySelectorAll("tbody tr").forEach(item => item.remove())
        doc.forEach(item => {
            let row = table.insertRow(-1)
            let firstCell = row.insertCell(0)
            let secoundCell = row.insertCell(1)
            firstCell.textContent = item.data().subject
            secoundCell.textContent = item.data().grade
            gpa += ((item.data().grade) * (item.data().credit))
            credit += item.data().credit
        })
        console.log(gpa/credit)
        $('h4').text(gpa/credit)
    })
*/

// index.js
//let firebaseConfig = {
//   apiKey: "AIzaSyBzfdUNQR9e0fVLbnSA_eSva6oP3feq9HI",
//   authDomain: "localhost",
//   projectId: "database-2d6f4",
//};
// Initialize Firebase

let firebaseConfig = {
    apiKey: "AIzaSyAyLKUn19Kv8ZJyEf1xiEkv_6JUg709YmI",
    authDomain: "dog-shit-155ad.firebaseapp.com",
    projectId: "dog-shit-155ad",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
$('#yamero').click( () => {
    $('#firstname').val('')
    $('#lastname').val('')
    $('#email').val('')
    $('#massage').val('')
    
} )

$('#yamete').click(() => {

    let firstName = document.querySelector('#firstname').value;
    let lastname = document.querySelector('#lastname').value;
    let email = document.querySelector('#email').value;
    let massage = document.querySelector('#massage').value;
    if (firstName == null || firstName == '') {
        alert('please enter you first name');
      return;
    }
    if(lastname == null || lastname == ''){
        alert('please enter your last name')
        return;

    }
    if(email == null || email ==''){
        alert('please enter you email ')
        return;
    }
    if(massage == null || massage == ''){
        alert('please enter you massage ')
        return;

    }
    
    
    console.log("gg nigga");
    db.collection("users").add({
            firstname: $('#firstname').val(),
            lastname: $('#lastname').val(),
            email: $('#email').val(),
            massage: $('#massage').val(),


        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            $('#firstname').val('')
            $('#lastname').val('')
            $('#email').val('')
            $('#massage').val('')
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
});


db.collection("users").onSnapshot(doc => {
    let table = $('tbody')[0]


    $("tbody tr").remove();

    doc.forEach(item => {
        let email = item.data().email.split('');
        let string = email[0];
        for(let i =1 ; i < email.length ; i++){
            
            if(email[i] == '@' ){
                email[i] = '@';
            }else{
                email[i] = 'x' ;
            }
            string += email[i];
        }
        
        let row = table.insertRow(-1)
        let firstcell = row.insertCell(0)
        let secondcell = row.insertCell(1)
        let thirdcell = row.insertCell(2)
        let fourthcell = row.insertCell(3)
        firstcell.textContent = item.data().firstname
        secondcell.textContent = item.data().lastname
        thirdcell.textContent = string ;
        fourthcell.textContent = item.data().massage

    })

})