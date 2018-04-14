import React, {Component} from 'react'

class Palindrome extends Component {
    constructor(){
        super()
        this.state = {
            userInput:"",
            palindrome:""
        }
    }

    handleChange(val){
        this.setState({userInput:val})
    }

    isPalindrome(userInput) {
        const forwards = userInput;
        let backwards = userInput;
        backwards = backwards.split('').reverse().join('');

    
        if ( forwards === backwards ) {
          this.setState({ palindrome: 'true' });
        } else {
          this.setState({ palindrome: 'false' });
        }
      }
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Pallindrome</h4>
                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=>this.isPalindrome(this.state.userInput)}>CHECK IT</button>
                <span className="resultsBox">Is Palindome: {this.state.palindrome}</span>

                </div>
        )
    }
}

export default Palindrome