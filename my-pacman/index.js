"use strict"


// 0 - pacdots
// 1 - wall
// 2 - ghost lair
// 3 - powerpellets
// 4 - empty

window.onload = () => {
    view.renderGrid();
    document.addEventListener('keyup', controller.control);
}

const view = {
    layout: [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ],

    renderGrid() {
        const grid = document.querySelector('.grid');

        this.layout.forEach(item => {
            const square = document.createElement('div');
            grid.appendChild(square);
            model.squares.push(square);

            return (item === 1) ? square.classList.add('wall') 
                : (item === 0) ? square.classList.add('pac-dot') 
                : (item === 3) ? square.classList.add('power-pellet')
                : 0;
        });

        this.renderScore();
        this.renderPacman();
    },

    renderPacman() {
        model.squares[model.pacmanIndex].classList.add('pacman');
    },

    renderScore() {
        const scoreDisplay = document.getElementById('score')
        scoreDisplay.textContent = ' ' + controller.score;
    }


};


const model = {

    squares: [],
    width: 28,
    pacmanIndex: 490,

    movePacMan() {
        if (this.checkWalls()) {
            this.squares[this.pacmanIndex].classList.remove('pacman');
            this.pacmanIndex += controller.direction;     
        }
    
        view.renderPacman();
        view.renderScore();
        console.log(this.pacmanIndex);
    },

    checkWalls() {
        // tunnel walkthrough
        const nextStep = this.pacmanIndex + controller.direction;
        this.pacmanIndex = (nextStep === 391) ? 363 
            : (nextStep === 364) ? 392 : this.pacmanIndex;
        this.squares[390].classList.remove('pacman');
        this.squares[365].classList.remove('pacman');
    
        return (this.squares[nextStep].classList.contains('wall')) ? false 
            : true
    },

    // checkWalls() {
    //     if ()
    // }



};

const controller = {

    score: 0,
    direction: 0,

    control(e) {
        switch (e.key) {
            case "ArrowLeft":
                controller.direction = -1
                console.log('Left pressed')
                break;
            case "ArrowRight":
                controller.direction = 1
                console.log('Right pressed')
                break;
            case "ArrowUp":
                controller.direction = -model.width
                console.log('Up pressed')
                break;
            case "ArrowDown":
                controller.direction = model.width
                console.log('Down pressed')
                break;
        }
        model.movePacMan();
    }


};

console.log(model.squares)
