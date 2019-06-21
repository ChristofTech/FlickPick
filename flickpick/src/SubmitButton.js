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
    console.log(tempHashMap);
    let tempHashMapKeys = Object.keys(tempHashMap)
    let trueArray = []
    for (let i=0; i < tempHashMapKeys.length; i++) {
      if (tempHashMap[tempHashMapKeys[i]] === true) {
        trueArray.push(tempHashMapKeys[i])
      }
    }
    let mapQuery = trueArray.join("+")
    console.log(`query: ${mapQuery}`);

    /*
    Query System For Title
    let configData = `search/movie?api_key=${apiKey}`;
    let query = `&language=en-US&page=1&query=${mapQuery}`;
    */
    let configData = `movie/76341?api_key=${apiKey}`;
    let query = `&language=en-US`;
    //let search = baseURL + configData + query;
    //let search = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${mapQuery}&page=1&include_adult=false`
    let search = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35%2C27`

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
    - Refresh on my code, fetch, etc.
    - Fix Query, and no results
    - Create Query system, parse for english language, also fix genre
    - Fix style for grid
    - Add search bar, with settings for search
    - Clean up code spacing
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
