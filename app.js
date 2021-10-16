document.addEventListener('DOMContentLoaded', () => {
        const squares = document.querySelectorAll('.grid div')
        const result = document.querySelector('#result')
        const displayCurrentPlayer = document.querySelector('#current-player')
        const rows = 6
        const cols = 7
        let currentPlayer = 1
        let play = 1

        const twoDim = new Array(cols);
        for (var i = 0; i < twoDim.length; ++i) {
            twoDim[i] = new Array(rows);
        }
        const winningArrays = [
            [0, 1, 2, 3],
            [41, 40, 39, 38],
            [7, 8, 9, 10],
            [34, 33, 32, 31],
            [14, 15, 16, 17],
            [27, 26, 25, 24],
            [21, 22, 23, 24],
            [20, 19, 18, 17],
            [28, 29, 30, 31],
            [13, 12, 11, 10],
            [35, 36, 37, 38],
            [6, 5, 4, 3],
            [0, 7, 14, 21],
            [41, 34, 27, 20],
            [1, 8, 15, 22],
            [40, 33, 26, 19],
            [2, 9, 16, 23],
            [39, 32, 25, 18],
            [3, 10, 17, 24],
            [38, 31, 24, 17],
            [4, 11, 18, 25],
            [37, 30, 23, 16],
            [5, 12, 19, 26],
            [36, 29, 22, 15],
            [6, 13, 20, 27],
            [35, 28, 21, 14],
            [0, 8, 16, 24],
            [41, 33, 25, 17],
            [7, 15, 23, 31],
            [34, 26, 18, 10],
            [14, 22, 30, 38],
            [27, 19, 11, 3],
            [35, 29, 23, 17],
            [6, 12, 18, 24],
            [28, 22, 16, 10],
            [13, 19, 25, 31],
            [21, 15, 9, 3],
            [20, 26, 32, 38],
            [36, 30, 24, 18],
            [5, 11, 17, 23],
            [37, 31, 25, 19],
            [4, 10, 16, 22],
            [2, 10, 18, 26],
            [39, 31, 23, 15],
            [1, 9, 17, 25],
            [40, 32, 24, 16],
            [9, 17, 25, 33],
            [8, 16, 24, 32],
            [11, 17, 23, 29],
            [12, 18, 24, 30],
            [1, 2, 3, 4],
            [5, 4, 3, 2],
            [8, 9, 10, 11],
            [12, 11, 10, 9],
            [15, 16, 17, 18],
            [19, 18, 17, 16],
            [22, 23, 24, 25],
            [26, 25, 24, 23],
            [29, 30, 31, 32],
            [33, 32, 31, 30],
            [36, 37, 38, 39],
            [40, 39, 38, 37],
            [7, 14, 21, 28],
            [8, 15, 22, 29],
            [9, 16, 23, 30],
            [10, 17, 24, 31],
            [11, 18, 25, 32],
            [12, 19, 26, 33],
            [13, 20, 27, 34],
        ]


        function checkBoard() {
            let bis = Array.from(squares).slice(0, 42)

            // make a 2 dimension array for rows and columns

            let j = 0
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    if (bis[j].classList.length > 0) twoDim[row][col] = bis[j].classList[0]
                    else twoDim[row][col] = false
                    j++
                }
            }

            // check horizontal rows
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols - 3; col++) {
                    if (twoDim[row][col])
                        if(
                            (twoDim[row][col] === twoDim[row][col+1]) &&
                            (twoDim[row][col] === twoDim[row][col+2]) &&
                            (twoDim[row][col] === twoDim[row][col+3])
                        ){
                            alert('win')
                        }

                }
            }
            
            // check vertical columns
            console.table(twoDim)
            for (let col = 0; col < cols; col++) {
                for (let row = 0; row < rows - 3; row++) {
                    if (twoDim[row][col]) {
                        console.log(twoDim[row][col])
                        console.log(twoDim[row][col])
                        console.log(twoDim[row][col] === twoDim[row + 1][col])

                        console.log('________________________________________________')
                        if((twoDim[row][col] === twoDim[row+1][col]) &&
                            (twoDim[row][col] === twoDim[row+2][col]) &&
                            (twoDim[row][col] === twoDim[row+3][col])
                        ){
                            alert('win')
                        }
                    }
                }
            }

            // check diagonale decrease
            for (let col = 0; col < cols; col++) {
                for (let row = 0; row < rows - 3; row++) {
                    if (twoDim[row][col]) {

                        if((twoDim[row][col] === twoDim[row+1][col+1]) &&
                            (twoDim[row][col] === twoDim[row+2][col+2]) &&
                            (twoDim[row][col] === twoDim[row+3][col+3])
                        ){
                            alert('win')
                        }
                    }
                }
            }

            // check diagonale increase
            for (let row = 3; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    if (twoDim[row][col]) {

                        console.log(twoDim[row][col])
                        console.log(twoDim[row-1][col+1])
                        console.log(twoDim[row-2][col+2])
                        console.log(twoDim[row-3][col+3])
                        console.log(twoDim[row][col] === twoDim[row-3][col+3])

                        console.log('________________________________________________')
                        if((twoDim[row][col] === twoDim[row-1][col+1]) &&
                            (twoDim[row][col] === twoDim[row-2][col+2]) &&
                            (twoDim[row][col] === twoDim[row-3][col+3])
                        ){
                            alert('win')
                        }
                    }
                }
            }
            // console.table(twoDim)

            // for (let i = 0; i < squares.length; i++) {
            //
            //     // check horizontally
            //     if (squares[i].classList.length > 0){
            //
            //     }
            //
            // }

        }

        /*   function checkBoard() {
               for (let y = 0; y < winningArrays.length; y++) {
                   const square1 = squares[winningArrays[y][0]]
                   const square2 = squares[winningArrays[y][1]]
                   const square3 = squares[winningArrays[y][2]]
                   const square4 = squares[winningArrays[y][3]]

                   //check those squares to see if they all have the class of player-one
                   if (
                       square1.classList.contains('player-one') &&
                       square2.classList.contains('player-one') &&
                       square3.classList.contains('player-one') &&
                       square4.classList.contains('player-one')
                   ) {
                       result.innerHTML = 'Player One Wins!'
                       play = 0
                   }
                   //check those squares to see if they all have the class of player-two
                   if (
                       square1.classList.contains('player-two') &&
                       square2.classList.contains('player-two') &&
                       square3.classList.contains('player-two') &&
                       square4.classList.contains('player-two')
                   ) {
                       result.innerHTML = 'Player Two Wins!'
                       play = 0

                   }
               }
           }*/

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
                        checkBoard()
                        clearInterval(count)
                    }
                    current += 7
                }, 100)

                // checkBoard()
            }
        }
    }
)
