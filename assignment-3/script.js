function formData() {
    var userName = $("#name").val();
    var rollNumber = $("#rollNo").val();
    var mobile = $("mobile").val();
    var email = $("#email").val();
    $("#boardfordata").empty();
    info(userName, rollNumber, mobile, email);
}

function info(userName, rollNumber, mobile, email) {
    $("#boardfordata").append("<li>Name: " + userName + "</li>");
    $("#boardfordata").append("<li>Roll Number: " + rollNumber + "</li>");
    $("#boardfordata").append("<li>Phone Number: " + mobile + "</li>");
    $("#boardfordata").append("<li>Email id: " + email + "</li>");
}
