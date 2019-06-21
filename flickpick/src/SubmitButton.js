import React from 'react'

import FilmStrip from './FilmStrip';

class SubmitButton extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      info: {},
      temp: "Temporary Display Title"
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    //https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
    this.setState({loading: true})
    let apiKey = '0ce9778e876db645797841a0fc50de6a';

    let baseURL = 'https://api.themoviedb.org/3/';

    // Query maker, get the buttons selected, make this into a function later
    let tempHashMap = this.props.search
    let tempHashMapKeys = Object.keys(tempHashMap)
    let trueArray = []
    for (let i=0; i < tempHashMapKeys.length; i++) {
      if (tempHashMap[tempHashMapKeys[i]] === true) {
        trueArray.push(tempHashMapKeys[i])
      }
    }
    let mapQuery = trueArray.join("+")
    console.log(`query: ${mapQuery}`);

    let configData = `search/movie?api_key=${apiKey}`;
    let query = `&language=en-US&page=1&query=${mapQuery}`;
    let search = baseURL + configData + query;
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
    - Study Fetch
    - Fix Query
    - Create Query system, parse for english language, also fix genre
    - Fix style for grid
    - Add search bar, with settings for search
  */
  render() {

    let resultsPrompt
    let resultsList = this.state.info.results
    let resultsFlag = false

    if (resultsList) {
      console.log(resultsList);
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
