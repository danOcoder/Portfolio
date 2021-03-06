import React, { Component } from 'react';

class FloatedLabelTextArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      className: '',
      value: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = event => {
    if (event.target.value != '') {
      this.setState({
        className: 'activeField '
      });
    } else {
      this.setState({
        className: ''
      });
    }
  };

  render() {
    return (
      <div className='floatedLabelInput'>
        <label htmlFor={this.props.name} className={this.state.className}>
          {this.props.placeholder}
        </label>
        <textarea
          placeholder={this.props.placeholder}
          onChange={this.handleInput}
          type={this.props.type}
          id={this.props.id}
          name={this.props.name}
          cols={this.props.cols}
          rows={this.props.rows}
        />
      </div>
    );
  }
}

export default FloatedLabelTextArea;
