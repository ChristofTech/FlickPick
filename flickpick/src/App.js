import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import SubmitButton from './SubmitButton';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      checkedItems: new Map([
        ["Comedy", false],
        ["Horror", false]
      ])
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    /*
    const {type, name, checked} = event.target
    if (type === "checkbox") {
      this.setState({[name]: checked})
    }
    */

    /*
    const item = event.target.name;
    const isChecked = event.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    */

    const {type, name, checked} = event.target
    if (type === "checkbox") {
      this.setState(prevState => ({checkedItems: prevState.checkedItems.set(name, checked)}))
    }
  }

  /*
    Might have to combine submit button with my genre buttons
    to get data
  */
  render() {
    const buttonData = [
      {
        key: 1,
        name: "Comedy"
      },
      {
        key: 2,
        name: "Horror"
      }
    ]

    const buttonComponents = buttonData.map(button =>
      <Button
        key={button.key}
        type="checkbox"
        checked={this.state.checkedItems.get(button.name)}
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
          {buttonComponents}<br />
          <SubmitButton search={this.state.checkedItems} />
        </main>

        <footer>
          Footer
        </footer>
      </div>
    );
  }
}

export default App;
