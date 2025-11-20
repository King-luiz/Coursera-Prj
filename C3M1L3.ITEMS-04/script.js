function changeColor(color) {
    // Change the background color
    document.body.style.backgroundColor = color;
    
    // Change text color based on background for better readability
    const lightColors = ['yellow', 'white', 'lightgray', 'cyan'];
    if (lightColors.includes(color)) {
        document.body.style.color = 'black';
    } else {
        document.body.style.color = 'white';
    }
    
    // Optional: Add a smooth transition effect
    document.body.style.transition = 'background-color 0.3s ease';
    
    // Optional: Display the current color
    console.log('Background color changed to: ' + color);
}

// Bonus: Add keyboard support
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case '1':
            changeColor('red');
            break;
        case '2':
            changeColor('green');
            break;
        case '3':
            changeColor('blue');
            break;
        case '4':
            changeColor('yellow');
            break;
    }
});