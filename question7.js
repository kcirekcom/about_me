function win() {
    console.log('you won');
}

function lose() {
    console.log('you lost guess again');
}

function loop(arr, input) {
    for (var i = 0; i < 6; i++) {
        if (input === arr[i]) {
            win();
            i = 6;
            break;
        } else {
            lose();
        }
    }
};

arr = ['golf', 'baseball', 'soccer', 'basketball'];
input = 'golf';
loop(arr, input); 
