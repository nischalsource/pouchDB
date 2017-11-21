
function generateEmail(){
    var email = [
    "guy@mail.com",
    "girl@mail.com", 
    "trans@mail.com"
    ];
    var random = Math.floor(Math.random() * 3);
    return email[random];
}



function generateReason(){
    var contactReason = [
    "Questions",
    "Problems", 
    "Commendations"
    ];

    var random = Math.floor(Math.random() * 3);
    return contactReason[random];
}



function generateComment(){
    var comments = [
    "I enjoyed service",
    "Thankyou", 
    "Please Call me"
    ];
    var random = Math.floor(Math.random() * 3);
    return comments[random];
}



module.exports = {generateComment, generateReason, generateEmail};