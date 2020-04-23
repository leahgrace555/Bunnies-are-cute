var howMany = function() {
    var count = prompt('How many bunnies would you like to see?');

    while( count === '' || isNaN(count) ) {
        count = prompt ('Please enter a number. How many bunnies would you like to see?');
    }

    return Number(count);
}



var showOrder = function() {
    var item = '<img src="Images/bunnysmall.jpg">';
    var total = howMany();
    var result = '';

    for(var i = 0; i < total; i++) {
        result = result + '<p>' + i + item + '<p>';
    }

    return result

    document.write(result)
}





