
// two empty arrays for username and passwords after "submit" there saves one more value
let tname = [];
let psw = [];


document.getElementById('userPsw').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Read from login form username and password
    const truename = document.getElementById('userName').value.trim(); 
    const truepsw = document.getElementById('userPW').value.trim(); 

    // Create reverse username
    let reverse_name = truename.split('').reverse().join('');
    console.log('Reverse username: ' + reverse_name);

    // check if username and password not empty
    // if not empty, than push values in arrays and write it in console
    if (truepsw !== '' && truename !== '') {
        psw.push(truepsw); 
        tname.push(truename);
        document.getElementById('userPW').value = ''; 
        console.log('username:', truename);
        console.log('password:', truepsw);

        // if who checks arrays values
        // if password length = 3 and all 3 passwords is same than check usernames
        // 3-rd username must be reverse first username
        // If true than show button 
        if (psw.length === 3 && (psw[0] === psw[1] && psw[1] === psw[2])) {
            if(tname[0] === tname[2].split('').reverse().join('')){
                document.write("<a href='pdf.html' class='btn btn-primary' role='button'>Check this task page</a>");
            }
        } else if (psw.length > 3) {
            console.log('Wrong password. Refresh browser and try again !!!!!');
        }
    }
});

