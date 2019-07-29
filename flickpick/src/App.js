import './App.css'
import React from 'react'
import ApiLib from './ApiLib'
import Button from './Button'
import SearchBar from './SearchBar'
import SubmitButton from './SubmitButton'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkedItems: {},
      genreList: [],
      searchBar: "",
      ddmON: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.ddmClick = this.ddmClick.bind(this)
  }

  // Load the genre list from tMDB API, set them all to false
  componentDidMount() {
      fetch(ApiLib.common.getGenreList())
          .then(response => response.json())
          .then(data => {
            let tempChecked = {}
            let genreList = data.genres
            for (let i = 0; i < genreList.length; i++) tempChecked[genreList[i]["name"]] = false
              this.setState({
                  checkedItems: tempChecked,
                  genreList: genreList
              })

          })
          .catch(function(err){
            alert(err)
          })
  }

  // Handles form field changes
  handleChange(event) {
    const {type, name, checked, value} = event.target
    if (type === "checkbox") {
      // spread old checked items, update the old one with the new checked
      this.setState(prevState => ({checkedItems: {
        ...prevState.checkedItems,
        [name]: checked
      }}))
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  // Handles when the drop down for the Quick Pick fields is selected
  ddmClick() {
    this.setState(prevState => ({ddmON: !prevState.ddmON}))
  }

  render() {
    const buttonComponents = this.state.genreList.map(button =>
      <Button
        key={button.id}
        type="checkbox"
        checked={this.state.checkedItems[button.name]}
        name={button.name}
        onChange={this.handleChange}
      />
    )

    return (
      <div className="App">
        <header>
          <h1>FlickPick</h1>
        </header>

        <main>
          <SearchBar
            type="text"
            value={this.state.searchBar}
            placeholder="Titles, Actors, More..."
            name="searchBar"
            onChange={this.handleChange}
            ddmON={this.state.ddmON}
          />

          <h2>Quick Pick:</h2>
          {this.state.ddmON === true &&
            <div style={{display: "flex", "flexWrap": "wrap", "justifyContent": "center"}}>
              {buttonComponents}
            </div>
          }
          <div style={{border: "1px solid black", width: "40vw", margin: "0 auto"}} onClick={this.ddmClick}>
            Quick Pick
          </div>

          <br />
          <b>Make Quick Pick Buttons Drop Down, Have Quick Pick: Text Change on State</b>
          <SubmitButton searchQuery={this.state.searchBar} ckObj={this.state.checkedItems} ckList={this.state.genreList} ddmON={this.state.ddmON} />
        </main>

        <footer style={{border: "solid 1px black"}}>
          Footer
        </footer>
      </div>
    );
  }
}

export default App;
