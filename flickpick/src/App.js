import React from 'react';
import './App.css';
import Button from './Button';
import SubmitButton from './SubmitButton';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      checkedItems: {
        "Comedy": false,
        "Horror": false
      }
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
      {id: 1, name: "Action"},
      {id: 2, name: "Adventure"},
      {id: 3, name: "Comedy"},
      {id: 4, name: "Drama"},
      {id: 5, name: "Horror"},
      {id: 6, name: "Musical"},
      {id: 7, name: "Romance"},
      {id: 8, name: "Sci-Fi"},
      {id: 9, name: "Thriller"}
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
