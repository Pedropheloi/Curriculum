const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
        button.style.transition = 'transform 0.5s';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
        button.style.backgroundColor = '';
    });

    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(1)';
    });

    button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1.05)';
    });
});
