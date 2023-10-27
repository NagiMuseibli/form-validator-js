const form = document.getElementById('form');
const usarname = document.getElementById('usarname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control is-valid';
}


function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (re.test(input.value)) {
        success(input);
    } else {
        error(input, 'Invalid email address');
    }
}

function checkRequired(inputs) {
    inputs.forEach(function (input) {
        if (input.value === '') {
            error(input, `${input.id} is required`);
        } else {
            success(input);
        }
    });
    // console.log(input.value);

}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} must be at least ${min} characters long`);
    } else if (input.value.length > max) {
        error(input, `${input.id} must be at most ${max} characters long`);
    } else {
        success(input);
    }
}

function checkPassword(input1, input2) {
    if (input1.value !== input2.value) {
        error(input2, 'passwords do not match');
    }
}

function checkPhone(input) {
    var exp = /^\d{12}$/;
    if (!exp.test(input.value)) {
        error(input, 'Phone must be 12 numbers');
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([usarname, email, password, repassword, phone]);
    checkEmail(email);
    checkLength(usarname, 7, 15);
    checkLength(password, 7, 12);
    checkPassword(password, repassword);
    checkPhone(phone);

});