import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    isFormFilled: false,
    firstNameError: '',
    lastNameError: '',
    firstNameInputState: false,
    lastNameInputState: false,
  }

  clickAnotherResponse = () => {
    this.setState({
      isFormFilled: false,
      firstNameError: '',
      lastNameError: '',
      firstNameInputState: false,
      lastNameInputState: false,
    })
  }

  submittingForm = event => {
    event.preventDefault()
    const {firstNameInputState, lastNameInputState} = this.state
    if (firstNameInputState === true && lastNameInputState === true) {
      this.setState({isFormFilled: true})
    } else if (firstNameInputState === false && lastNameInputState === true) {
      this.setState({lastNameError: 'Required'})
    } else if (firstNameInputState === true && lastNameInputState === false) {
      this.setState({firstNameError: 'Required'})
    } else {
      this.setState({firstNameError: 'Required', lastNameError: 'Required'})
    }
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({firstNameError: 'Required'})
    } else {
      this.setState({firstNameError: '', firstNameInputState: true})
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({lastNameError: 'Required'})
    } else {
      this.setState({lastNameError: '', lastNameInputState: true})
    }
  }

  renderSuccessfulForm = () => (
    <div className="main-container">
      <h1 className="heading">Registration</h1>
      <div className="login-container success-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="img-css"
        />
        <p className="submit-success">Submitted Successfully</p>
        <button
          type="button"
          className="submit-btn"
          onClick={this.clickAnotherResponse}
        >
          Submit Another Response
        </button>
      </div>
    </div>
  )

  renderSubmitForm = () => {
    const {firstNameError, lastNameError} = this.state

    return (
      <div className="main-container">
        <h1 className="heading">Registration</h1>
        <form className="login-container" onSubmit={this.submittingForm}>
          <div className="input-container">
            <label htmlFor="firstName" className="label-name">
              FIRST NAME
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="First name"
              className="input"
              onBlur={this.onBlurFirstName}
            />
            <p className="error-css">{firstNameError}</p>
          </div>
          <div className="input-container">
            <label htmlFor="firstName" className="label-name">
              LAST NAME
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="First name"
              className="input"
              onBlur={this.onBlurLastName}
            />
            <p className="error-css">{lastNameError}</p>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    )
  }

  render() {
    const {isFormFilled} = this.state

    return isFormFilled ? this.renderSuccessfulForm() : this.renderSubmitForm()
  }
}

export default RegistrationForm
