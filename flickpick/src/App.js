import './App.css'
import React from 'react'
import ApiLib from './ApiLib'
import Button from './Button'
import SearchBar from './SearchBar'
import SubmitButton from './SubmitButton'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      checkedItems: {},
      genreList: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
      //this.setState({loading: true})
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

  handleChange(event) {
    const {type, name, checked} = event.target
    // spread old checked items, update the old one with the new checked
    if (type === "checkbox") {
      this.setState(prevState => ({checkedItems: {
        ...prevState.checkedItems,
        [name]: checked
      }}))
    }
  }

  render() {
    const buttonComponents = this.state.genreList.map(button =>
      <Button
        key={button.id}
        type="checkbox"
        checked={this.state.checkedItems["button.name"]}
        name={button.name}
        onChange={this.handleChange}
      />
    )

    return (
      <div className="App">
        <header>
          <h1>FlickPick</h1>
        </header>

        <SearchBar />

        <main>
          <h2>Quick Pick:</h2>
          <div style={{display: "flex", "flexWrap": "wrap", "justifyContent": "center"}}>
            {buttonComponents}
          </div>

          <br />

          <SubmitButton ckObj={this.state.checkedItems} ckList={this.state.genreList} />
        </main>

        <footer style={{border: "solid 1px black"}}>
          Footer
        </footer>
      </div>
    );
  }
}

export default App;
