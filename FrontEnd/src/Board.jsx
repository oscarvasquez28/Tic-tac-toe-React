import React, {Component} from 'react'
import Square from './Square'

const calculateWinner = squares => {
    const lines = [
        //horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        //diagonal
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i< lines.length; i++){
        //get current line row (horizontal, vertical, diagonal)
        const [a, b, c] = lines[i]

        //let's checj uf we have X or O in position a
        if(
            //if we have it in a position
            squares[a] && 
            //and it's the same as in b position
            squares[a] === squares[b] && 
            //and it's the same as in c position
            squares[a] === squares[c]){

                //return the element that's inside a (X or O)
            return squares[a]
            // can be
            //return squares[b]
            //return squares[c]
            //since they're all equal
        }

        //if there's no such element - return an empty string
        
    }
    return ''
}

class Board extends Component{

    state = {
        squares: ['', '', '', '', '', '', '', '', ''],
        xIsNext : true
    }

    handleClick = number => () => {
        console.log(number)

        if(calculateWinner(this.state.squares) || this.state.squares[number]){
            
            return
        }

        const newSquares = [... this.state.squares]

        // const newSquares = this.state.squares.slice()
        newSquares[number] = this.state.xIsNext ? 'X' : 'O' 
            this.setState({squares: newSquares,
            xIsNext : !this.state.xIsNext
        })
    }

    handleReset = () => {
        this.setState({
            squares: ['', '', '', '', '', '', '', '', ''],
            xIsNext: true
        })
    }

    render(){
        const {squares, xIsNext} = this.state

        const winner = calculateWinner(this.state.squares)

        let status

        if(winner){
            status =  `Winner: ${winner} `
        } else{
            status =  `Next step: ${xIsNext ? 'X' : 'O'} `
        }
        

        return(
            <div className='Board'>
                <h1 className='status'>{status}</h1>
                <div className='Row'>
                <Square value = {squares[0]} onClick={this.handleClick(0)}/>
                <Square value = {squares[1]} onClick={this.handleClick(1)}/>
                <Square value = {squares[2]} onClick={this.handleClick(2)}/>
                </div>
                <div className='Row'>
                <Square value = {squares[3]} onClick={this.handleClick(3)}/>
                <Square value = {squares[4]} onClick={this.handleClick(4)}/>
                <Square value = {squares[5]} onClick={this.handleClick(5)}/>
                </div>
                <div className='Row'>
                <Square value = {squares[6]} onClick={this.handleClick(6)}/>
                <Square value = {squares[7]} onClick={this.handleClick(7)}/>
                <Square value = {squares[8]} onClick={this.handleClick(8)}/>

                </div>

                <button onClick={this.handleReset} className='Reset'>Reset</button>



            </div>
        )
    }
}

export default Board