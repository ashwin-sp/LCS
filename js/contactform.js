/**
 * Created by ashwin-4529 on 05/02/17.
 */
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var subject = document.getElementById("subject").value;
var message = document.getElementById("message").value;

window.open('mailto:awesomeash2014@gmail.com?subject='+subject+'&body='+message+'');