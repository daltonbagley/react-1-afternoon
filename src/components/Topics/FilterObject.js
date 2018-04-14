import React, {Component} from 'react'

class FilterObject extends Component {
    constructor(){
        super()

        this.state ={
            unFilteredArray: [{name: 'Dalton', title: 'Data Architect', skills: 'R, SQL' },{name: 'Joe', title: 'Senior Data Architect', hobbies: 'watching baseball'},{name: 'Kyle'}],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    filterer(prop){
        let objs = this.state.unFilteredArray
        let filteredObjs = []

        for(let i = 0; i < objs.length; i++){
            if(objs[i].hasOwnProperty(prop)){
                filteredObjs.push(objs[i])
            }
        }
    this.setState({filteredArray: filteredObjs})
    }

    
    render(){
        return(
            <div className='puzzleBox filterObjectPB'>
            <h4> Filter Object </h4>
            <span className='puzzleText'></span>
            <input className='inputLine' onChange={(e)=>this.handleChange(e.target.value)}></input>
            <button className='confirmationButton' onClick={()=>this.filterer(this.state.userInput)}> FILTER!!!! </button>
            <span className='resultsBox filterObjectRB'> {JSON.stringify(this.state.filteredArray, null, 10)}</span>

            </div>
        )
    }
}

export default FilterObject