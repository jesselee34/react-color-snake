export const handleKeyboard = (event, frame) => {
    switch (event.key) {
        case "ArrowDown":
			frame.snake.dir = 'D';
			break;
        case "ArrowUp":
            frame.snake.dir = 'U';
            break;
        case "ArrowLeft":
            frame.snake.dir = 'L';
            break;
        case "ArrowRight":
            frame.snake.dir = 'R';
            break;
        case "Enter":
            frame.pause = !frame.pause;
            break;
        case "Escape":
            // Do something for "esc" key press.
            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }
};
