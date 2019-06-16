import React from 'react'

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

    for (let i in this.props.search) {
      console.log('Key is: ' + i + '. Value is: ' + this.props.search);
    }

    let configData = `search/movie?api_key=${apiKey}`;
    let query = `&language=en-US&page=1&query=popular`;
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
    - need to create a prop for my buttons which passes down genre
    - Create Query system, parse for english language
    - need event handler which on submit button click will generate grid, boolean based off of state of submit being hit?
    - Create a grid for movies that appears below the searches
    - Create buttons which fetch data
    - Buttons must activate when click, and submit when submit is clicked
    - Create 9 easy to pick genres
  */
  render() {

    let temp
    console.log(`API: ${this.state.info}`);
    //let test = this.state.info.results["0"]
    let resultsList = this.state.info.results

    console.log(resultsList);

    if (resultsList) {
      /*
      this.setState({
        temp: resultsList[2]["original_title"]
      })
      */
      temp = resultsList[2]["original_title"]
    }
    else {
      //that shit be empty
      /*
      this.setState({
        temp: "No Results Found"
      })
      */
      temp = "No Results Found"
    }

    return (
      <div>

        <button onClick={this.handleClick}>Submit</button>

        <div>test: {temp}</div>
      </div>
    )
    // <span>{this.state.info}</span>
  }
}

export default SubmitButton
