document.addEventListener('DOMContentLoaded', () => {
    const keyPressed = document.getElementById('keyPressed');
    const keyCode = document.getElementById('keyCode');
    const keyHistory = document.getElementById('keyHistory');
    
    const keyPressAudio = new Audio('keypress-sound.mp3'); // Ensure you have a sound file
    
    document.addEventListener('keydown', (event) => {
        keyPressed.textContent = event.key;
        keyCode.textContent = event.keyCode;

        keyPressAudio.play(); // Play sound on key press

        const listItem = document.createElement('li');
        listItem.textContent = `Key: ${event.key}, Key Code: ${event.keyCode}`;
        keyHistory.appendChild(listItem);

        if (event.ctrlKey || event.altKey || event.shiftKey) {
            const combo = [];
            if (event.ctrlKey) combo.push('Ctrl');
            if (event.altKey) combo.push('Alt');
            if (event.shiftKey) combo.push('Shift');
            combo.push(event.key);
            listItem.textContent += ` (Combination: ${combo.join(' + ')})`;
        }
    });
});
