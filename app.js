document.addEventListener('DOMContentLoaded', () => {

        /* The varaibles */
        const squares = document.querySelectorAll('.grid div')
        const bis = Array.from(squares).slice(0, 42) // remove the 'hidden divs'
        const winner = document.querySelector('#winner')
        const result = document.querySelector('#result')
        const displayCurrentPlayer = document.querySelector('#current-player')
        const rows = 6
        const cols = 7
        let currentPlayer = 1
        let play = 1

        // this array will receives the players marks
        const twoDim = new Array(cols);
        for (var i = 0; i < twoDim.length; ++i) {
            twoDim[i] = new Array(rows);
        }


        /* Functions*/
        function updateArray() {
            // update and  fill th 2 dimension array for rows and columns
            let j = 0
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    if (bis[j].classList.length > 0) twoDim[row][col] = bis[j].classList[0]
                    else twoDim[row][col] = false
                    j++
                }
            }
        }

        function checkBoard() {
            // check horizontal
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols - 3; col++) {
                    if (twoDim[row][col])
                        if (
                            (twoDim[row][col] === twoDim[row][col + 1]) &&
                            (twoDim[row][col] === twoDim[row][col + 2]) &&
                            (twoDim[row][col] === twoDim[row][col + 3])
                        ) {
                            theWinnerIs(twoDim[row][col])

                        }
                }
            }

            // check vertical
            for (let col = 0; col < cols; col++) {
                for (let row = 0; row < rows - 3; row++) {
                    if (twoDim[row][col]) {
                        if ((twoDim[row][col] === twoDim[row + 1][col]) &&
                            (twoDim[row][col] === twoDim[row + 2][col]) &&
                            (twoDim[row][col] === twoDim[row + 3][col])
                        ) {
                           theWinnerIs(twoDim[row][col])


                        }
                    }
                }
            }

            // check diagonale diagonally up
            for (let col = 0; col < cols; col++) {
                for (let row = 0; row < rows - 3; row++) {
                    if (twoDim[row][col]) {
                        if ((twoDim[row][col] === twoDim[row + 1][col + 1]) &&
                            (twoDim[row][col] === twoDim[row + 2][col + 2]) &&
                            (twoDim[row][col] === twoDim[row + 3][col + 3])
                        ) {
                            theWinnerIs(twoDim[row][col])

                        }
                    }
                }
            }

            // check diagonally down
            for (let row = 3; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    if (twoDim[row][col]) {
                        if ((twoDim[row][col] === twoDim[row - 1][col + 1]) &&
                            (twoDim[row][col] === twoDim[row - 2][col + 2]) &&
                            (twoDim[row][col] === twoDim[row - 3][col + 3])
                        ) {
                            theWinnerIs(twoDim[row][col])

                        }
                    }
                }
            }
        }

        function theWinnerIs(player) {
            play = 0
            if (player === 'player-one') result.innerHTML = 'Player One Wins!'
            else result.innerHTML = 'Player Two Wins!'
            winner.getAttribute('class')
            winner.classList.add('visible')
        }

        /* Action ! */
        for (let i = 0; i < squares.length; i++) {
            squares[i].onclick = () => {
                if (!play) exit
                let current = i
                count = setInterval(() => {
                    if (currentPlayer === 1) {
                        squares[current].classList.add('player-one')
                    } else if (currentPlayer === 2) {
                        squares[current].classList.add('player-two')
                    }
                    if (squares[current - 7] !== undefined) {
                        if (currentPlayer === 1) {
                            squares[current - 7].classList.remove('player-one')
                        } else if (currentPlayer === 2) {
                            squares[current - 7].classList.remove('player-two')
                        }
                    }
                    if ((squares[current + 7] !== undefined) && (squares[current + 7].classList.contains('taken'))) {
                        squares[current].classList.add('taken')
                        if (currentPlayer === 1) currentPlayer = 2
                        else currentPlayer = 1

                        displayCurrentPlayer.innerHTML = currentPlayer
                        if (currentPlayer === 1) {
                            displayCurrentPlayer.parentNode.classList.remove('p2')
                            displayCurrentPlayer.parentNode.classList.add('p1')
                        }
                        else {
                            displayCurrentPlayer.parentNode.classList.remove('p1')
                            displayCurrentPlayer.parentNode.classList.add('p2')
                        }

                        updateArray()
                        checkBoard()
                        clearInterval(count)
                    }
                    current += 7
                }, 100)
            }
        }
    }
)
