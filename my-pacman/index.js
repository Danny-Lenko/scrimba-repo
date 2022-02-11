"use strict"

// 0 - pacdots
// 1 - wall
// 2 - ghost lair
// 3 - powerpellets
// 4 - empty

window.onload = () => {
    view.renderGrid();
    document.addEventListener('keyup', controller.control);
    model.ghosts.forEach(ghost => model.moveGhost(ghost));
}

class Ghost {
    constructor(className, speed, index) {
        this.className = className;
        this.speed = speed;
        this.index = index;
        this.intervalID = null;
        this.currentIndex = index;
        this.isScared = false;
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

        this.renderScore(` ${controller.score}`);
        this.renderPacman();
        this.renderGhosts();
    },

    renderPacman() {
        model.squares[model.pacmanIndex].classList.add('pacman');
    },

    renderScore(content) {
        const scoreDisplay = document.getElementById('score')
        scoreDisplay.textContent = content;
    },

    renderGhosts() {
        model.ghosts.forEach(ghost => model.squares[ghost.currentIndex]
            .classList.add(ghost.className, 'ghost'));
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
        this.eatScaredGhost();
        view.renderPacman();
        view.renderScore(` ${controller.score}`);

        // console.log(this.ghosts[1].isScared);
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
        let timeoutID = null;
        if (this.squares[this.pacmanIndex].classList.contains('pac-dot')) {
            this.squares[this.pacmanIndex].classList.remove('pac-dot');
            controller.score++;
        }
        // eat big dot
        if (this.squares[this.pacmanIndex].classList.contains('power-pellet')) {
            this.squares[this.pacmanIndex].classList.remove('power-pellet');
            controller.score += 10;
            this.ghosts.forEach(ghost => ghost.isScared = true);
            setTimeout(this.unScareGhosts, 10000);
        }

    },

    moveGhost(ghost) {
        const directions = [1, -1, model.width, -model.width];
        let ghostDirection = directions[Math.floor(Math.random() * 4)];

            ghost.intervalID = setInterval(() => {

                if ( this.checkWallsGhosts(ghost, ghostDirection) ) {

                    this.squares[ghost.currentIndex]
                        .classList.remove(ghost.className, 'ghost', 'scared-ghost');
                    ghost.currentIndex += ghostDirection;
                    view.renderGhosts();

                } else ghostDirection = directions[Math.floor(Math.random() * 4)];

                if (ghost.isScared) {
                    this.squares[ghost.currentIndex].classList.add('scared-ghost');
                }

                controller.gameOverCheck();
            }, ghost.speed);    
    },

    checkWallsGhosts(ghost, ghostDirection) {
        // also checks if no other ghosts on the way
        return (
            this.squares[ghost.currentIndex + ghostDirection]
                .classList.contains('wall')
            || this.squares[ghost.currentIndex + ghostDirection]
                .classList.contains('ghost')
        ) ? false : true;
    },

    unScareGhosts() {
        model.ghosts.forEach(ghost => {
            ghost.isScared = false;
        });
    },

    eatScaredGhost() {
        if (this.squares[this.pacmanIndex].classList.contains('scared-ghost')) {
            let ghost = this.ghosts.find(ghost => ghost.currentIndex === this.pacmanIndex);
            this.squares[this.pacmanIndex].classList.remove('ghost', 'scared-ghost', ghost.className);
            ghost.currentIndex = ghost.index;
            ghost.isScared = false;

            console.log(ghost);
        }
    }

};

// --------------------- The controller -------------------------

const controller = {

    score: 0,
    direction: 0,

    control(e) {
        switch (e.key) {
            case "ArrowLeft": controller.direction = -1
                break;
            case "ArrowRight": controller.direction = 1
                break;
            case "ArrowUp": controller.direction = -model.width
                break;
            case "ArrowDown": controller.direction = model.width
                break;
        }
        model.movePacMan();
    },

    gameOverCheck() {

        if (model.squares[model.pacmanIndex].classList.contains('ghost') 
            && !model.squares[model.pacmanIndex].classList.contains('scared-ghost')) {

            model.ghosts.forEach(ghost => clearInterval(ghost.intervalID));
            document.removeEventListener('keyup', this.control);
            view.renderScore(` ${controller.score} - You LOSE`);

        } else if (this.score >= 274) {

            model.ghosts.forEach(ghost => clearInterval(ghost.intervalID));
            document.removeEventListener('keyup', this.control);
            view.renderScore(` ${controller.score} - You WIN`);

        }
    },

};






