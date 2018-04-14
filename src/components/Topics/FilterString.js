import React, {Component} from 'react'

class FilterString extends Component {
    constructor() {
        super()

        this.state = {
            unFilteredArray : ["This is an array of strings", "Here is another string", "I like string cheese"],
            userInput : "",
            filteredArray : []
        }
    }
    handleChange(val){
        this.setState({userInput: val})
    }

    solve(userInput){
        let arr = this.state.unFilteredArray
        let filtered = []
        for(let i = 0; i < arr.length; i++){
            if(arr[i].includes(userInput)){
                filtered.push(arr[i])
            }

        }
        this.setState({filteredArray: filtered})
    }
    
    render(){
        return(
            <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText"> Names: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.solve(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
      </div>
        )
    }
}

export default FilterString