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

class Ghost {
    constructor(className, speed, index) {
        this.className = className;
        this.speed = speed;
        this.index = index;     
    }
};

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
        this.renderGhosts();
    },

    renderPacman() {
        model.squares[model.pacmanIndex].classList.add('pacman');
    },

    renderScore() {
        const scoreDisplay = document.getElementById('score')
        scoreDisplay.textContent = ' ' + controller.score;
    },

    renderGhosts() {
        model.ghosts.forEach(ghost => model.squares[ghost.index].classList.add(ghost.className));
    }

};

//--------------------- The model ------------------------

const model = {

    squares: [],
    width: 28,
    pacmanIndex: 490,
    ghosts: [
        new Ghost('blinky', 250, 348),
        new Ghost('pinky', 400, 376),
        new Ghost('inky', 300, 351),
        new Ghost('clyde', 500, 379)
    ],

    movePacMan() {
        if (this.checkWalls()) {
            this.squares[this.pacmanIndex].classList.remove('pacman');
            this.pacmanIndex += controller.direction;     
        }
    
        this.eatDots();
        view.renderPacman();
        view.renderScore();
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

    eatDots() {
        if (this.squares[this.pacmanIndex].classList.contains('pac-dot')) {
            this.squares[this.pacmanIndex].classList.remove('pac-dot');
            controller.score++;
        }
        // eat big dot
        if (this.squares[this.pacmanIndex].classList.contains('power-pellet')) {
            this.squares[this.pacmanIndex].classList.remove('power-pellet');
            controller.score += 10;
        }

    },

    moveGhosts() {
        const directions = [1, -1, model.width, -model.width];

        this.ghosts.forEach(ghost => {
            ghost.index += directions[Math.floor(Math.random() * 4)];
        })
        // view.renderGhosts();
    }

};

// --------------------- The controller -------------------------

const controller = {

    score: 0,
    direction: 0,

    control(e) {
        switch (e.key) {
            case "ArrowLeft":
                controller.direction = -1
                break;
            case "ArrowRight":
                controller.direction = 1
                break;
            case "ArrowUp":
                controller.direction = -model.width
                break;
            case "ArrowDown":
                controller.direction = model.width
                break;
        }
        model.movePacMan();
    }

};

model.moveGhosts();
model.moveGhosts();
model.moveGhosts();

