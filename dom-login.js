document.getElementById('login-submit').addEventListener('click', () => {
//     const emailField = document.getElementById('user-email');
//    const  emailText=emailField.value
//    const passwordField = document.getElementById('user-password');
//     const passwordText = passwordField.value;

//     if (emailText == 'shamimbhuiyan1508@gmail.com' && passwordText == 'lakat') {
//         window.location.href='banking.html'
//     }



    const emailField = document.getElementById('user-email');
    const emailText = emailField.value;
    const passwordField = document.getElementById('user-password');
    const passwordText = passwordField.value;
    if (emailText == 'shamimbhuiyan1508@gmail.com' && passwordText == 'lakat') {
        window.location.href='banking.html'
    }
})