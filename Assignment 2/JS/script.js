function choice(e) {
    switch (e) {
        case "Name":
            let str = /^[a-zA-Z][a-zA-Z\\s]+$/;

            let n = prompt("Enter your name");
            if (n.match(str)) {

                alert('This name is perfect to use')


            } else {

                alert("Sorry.This is invalid");

            }

            let n1 = prompt("Enter your name");

            if (n1.match(str)) {

                alert('This name is perfect to use')


            } else {

                alert("Sorry.This is invalid");

            }


            let n2 = prompt("Enter your name");




            if (n2.match(str)) {

                alert('This name is perfect to use')


            } else {

                alert("Sorry.This is invalid");

            }
            break;



        case "Email":

            let str1 = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
            let e = prompt("Your E-mail id please");
            if (e.match(str1)) {
                alert("This is a valid Email.Thank you")
            } else {

                alert("This is invalid");

            }
            let e1 = prompt("Your E-mail id please");
            if (e1.match(str1)) {
                alert("This is a valid Email.Thank you")
            } else {

                alert("This is invalid");

            }
            let e2 = prompt("Your E-mail id please");
            if (e2.match(str1)) {
                alert("This is a valid Email.Thank you")
            } else {

                alert("This is invalid");

            }



            break
        case "Phone":

            let str2 = /\+8801[0-9]{9}$/;
            let p = prompt("This is the time to validate your phone number:");
            if (p.match(str2)) {
                alert("This is a valid phone number for Bangladesh")
            } else {

                alert("Sorry.This is invalid");

            }

            let p1 = prompt("This is the time to validate your phone number:");
            if (p1.match(str2)) {
                alert("This is a valid phone number for Bangladesh")
            } else {

                alert("Sorry.This is invalid");

            }

            let p2 = prompt("This is the time to validate your phone number:");
            if (p2.match(str2)) {
                alert("This is a valid phone number for Bangladesh")
            } else {

                alert("Sorry.This is invalid");

            }

            break




        default:
            let str3 = /[^0][0-9]{3}/;
            let c = prompt("Enter your area's postal Code:");
            if (c.match(str3)) {
                alert('This is a valid postal code')

            } else {

                alert("Sorry.This is not from Bangladesh");
            }
            let c1 = prompt("Enter your area's postal Code:");
            if (c1.match(str3)) {
                alert('This is a valid postal code')

            } else {

                alert("Sorry.This is not from Bangladesh");
            }
            let c2 = prompt("Enter your area's postal Code:");


            if (c2.match(str3)) {
                alert('This is a valid postal code')

            } else {

                alert("Sorry.This is not from Bangladesh");
            }
    }
} function choice(e) {
    switch (e) {
        case "Name":
            let str = /^[a-zA-Z][a-zA-Z\\s]+$/;

            let n = prompt("Enter your name");
            if (n.match(str)) {

                alert('This name is perfect to use')


            } else {

                alert("Sorry.This is invalid");

            }

            let n1 = prompt("Enter your name");

            if (n1.match(str)) {

                alert('This name is perfect to use')


            } else {

                alert("Sorry.This is invalid");

            }


            let n2 = prompt("Enter your name");




            if (n2.match(str)) {

                alert('This name is perfect to use')


            } else {

                alert("Sorry.This is invalid");

            }
            break;



        case "Email":

            let str1 = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
            let e = prompt("Your E-mail id please");
            if (e.match(str1)) {
                alert("This is a valid Email.Thank you")
            } else {

                alert("This is invalid");

            }
            let e1 = prompt("Your E-mail id please");
            if (e1.match(str1)) {
                alert("This is a valid Email.Thank you")
            } else {

                alert("This is invalid");

            }
            let e2 = prompt("Your E-mail id please");
            if (e2.match(str1)) {
                alert("This is a valid Email.Thank you")
            } else {

                alert("This is invalid");

            }



            break
        case "Phone":

            let str2 = /\+8801[0-9]{9}$/;
            let p = prompt("This is the time to validate your phone number:");
            if (p.match(str2)) {
                alert("This is a valid phone number for Bangladesh")
            } else {

                alert("Sorry.This is invalid");

            }

            let p1 = prompt("This is the time to validate your phone number:");
            if (p1.match(str2)) {
                alert("This is a valid phone number for Bangladesh")
            } else {

                alert("Sorry.This is invalid");

            }

            let p2 = prompt("This is the time to validate your phone number:");
            if (p2.match(str2)) {
                alert("This is a valid phone number for Bangladesh")
            } else {

                alert("Sorry.This is invalid");

            }

            break




        default:
            let str3 = /[^0][0-9]{3}/;
            let c = prompt("Enter your area's postal Code:");
            if (c.match(str3)) {
                alert('This is a valid postal code')

            } else {

                alert("Sorry.This is not from Bangladesh");
            }
            let c1 = prompt("Enter your area's postal Code:");
            if (c1.match(str3)) {
                alert('This is a valid postal code')

            } else {

                alert("Sorry.This is not from Bangladesh");
            }
            let c2 = prompt("Enter your area's postal Code:");


            if (c2.match(str3)) {
                alert('This is a valid postal code')

            } else {

                alert("Sorry.This is not from Bangladesh");
            }
    }
}