var ask = function() {
    var answer = confirm("This Page contains excessive cuteness. Are you sure you wish to continue?");
    while( answer === false) {
        answer = confirm('Please click OK to view the excessive cuteness.');
    };

}
ask()