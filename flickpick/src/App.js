import React from 'react';
import './App.css';
import Button from './Button';
import SubmitButton from './SubmitButton';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      checkedItems: {}
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {type, name, checked} = event.target
    //set new checkedItems to previous checkItems
    let checkedItems = this.state.checkedItems
    checkedItems[name] = checked
    if (type === "checkbox") {
      this.setState(prevState => ({checkedItems: checkedItems}))
    }
  }

  render() {
    const buttonData = [
      {id: 28, name: "Action"},
      {id: 12, name: "Adventure"},
      {id: 35, name: "Comedy"},
      {id: 18, name: "Drama"},
      {id: 27, name: "Horror"},
      {id: 10402, name: "Music"},
      {id: 10749, name: "Romance"},
      {id: 878, name: "Sci-Fi"},
      {id: 53, name: "Thriller"}
    ]

    const buttonComponents = buttonData.map(button =>
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

        <main>
          <h2>Genres:</h2>
          <div style={{display: "flex", "flexWrap": "wrap", "justifyContent": "center"}}>
            {buttonComponents}
          </div>
          <br />
          <SubmitButton search={this.state.checkedItems} />
        </main>

        <footer style={{border: "solid 1px black"}}>
          Footer
        </footer>
      </div>
    );
  }
}

export default App;
