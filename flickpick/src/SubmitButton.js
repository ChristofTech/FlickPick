import React from 'react'
import ApiLib from './ApiLib'
import FilmStrip from './FilmStrip'

class SubmitButton extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      info: {}
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({loading: true})

    // Genre Getter
    let tempHashMap = this.props.ckObj
    let idList = this.props.ckList
    let tempHashMapKeys = Object.keys(tempHashMap)
    let trueArray = []
    for (let i=0; i < tempHashMapKeys.length; i++) {
      if (tempHashMap[tempHashMapKeys[i]] === true) {
        trueArray.push(idList[i]["id"])
      }
    }
    let mapQuery = trueArray.join("%2C")

    // Query System For Title
    let search = ApiLib.common.getQuery({
      "with_genres": mapQuery
    })
    console.log(`Search: ${search}`)
    fetch(search)
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          info: data
        })
      })
      .catch(function(err){
        alert(err)
      })
  }

  /*
    ToDo List:
    - Add search bar,
    - Refresh on my code, fetch, etc.
    - Fix Query, and no results
    - Button Fades, Refresh loads
    - Fix style for grid
    - Settings for search
    - Refresh on code/Clean up code spacing
    - Sort results by popularity, relevance, date, title
    - Movie Randomizer
  */
  render() {

    let resultsPrompt
    let resultsList = this.state.info.results
    let resultsFlag = false

    if (resultsList) {
      //console.log(resultsList);
      if (resultsList.length !== 0) {
        resultsFlag = true
        resultsPrompt = ""
      } else {
        resultsPrompt = "No Results Found"
      }
    }

    return (
      <div>

        <button onClick={this.handleClick}>Submit</button>

        <div>Results: {resultsPrompt}</div>

        <div>
          {this.state.loading ? <span>Loading...</span> : (resultsFlag ? <FilmStrip filmlist={resultsList}/> : "No Results.")}
        </div>
      </div>
    )
  }
}

export default SubmitButton
