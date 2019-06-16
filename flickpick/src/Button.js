import React from 'react'

import './Button.css';

//class Button extends React.Component {
  /*
  constructor() {
    super()
    this.state = {
      ButName: false,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {type, name, checked} = event.target
    if (type === "checkbox") {
      this.setState({[name]: checked})
    }
  }
  */
  /*
    ToDo List:
    - Create buttons which fetch data
    - Buttons must activate when click, and submit when submit is clicked
    - Create 9 easy to pick genres
  */

  /*
  render() {
    return (
      <div>
       <div id="ck-button">
          <label>
            <input
              type="checkbox"
              name="ButName"
              checked={this.state.Checked}
              onChange={this.handleChange}
            /><span>{this.props.name}</span>
          </label>
        </div>
      </div>
    )
  }
  */
//}

const Button = ({ type = 'checkbox', name, checked, onChange }) => {
  console.log(`${checked}`);
  return (
  <div id="ck-button">
    <label>
      <input
        type={type}
        name={name}
        checked={checked}
        onChange={onChange}
      /><span>{name}</span>
    </label>
  </div>
)};

export default Button
