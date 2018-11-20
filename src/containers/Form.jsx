import React, { Component } from 'react';

import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Select from '../components/Select';
import Button from '../components/Button'

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, newUser }) => {
  let valid = true;

  // validate form errors being empty
  // @ts-ignore
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  // @ts-ignore
  Object.values(newUser).forEach(val => {
    val === '' && (valid = false);
  });

  return valid;
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        gender: '',
        forename: '',
        surname: '',
        email: '',
        age: '',
        street: '',
        city: '',
        postcode: '',
        skills: [],
        about: '',
      },
      formErrors: {
          gender: '',
          forename: '',
          surname: '',
          email: '',
          age: '',
          street: '',
          city: '',
          postcode: '',
          skills: '',
          about: ''
      },
      genderOptions: ['Male', 'Female', 'Others'],
      skillOptions: ['Programming', 'Development', 'Design', 'Testing']
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Forename: ${this.state.newUser.forename}
        Surname: ${this.state.newUser.surname}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }

    /*
    fetch('http://example.com',{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data =>{
          console.log("Successful" + data);
        })
    })
    */
  }
  handleClearForm = (e) => {
    e.preventDefault();
    this.setState({
      newUser: {
        gender: '',
        forename: '',
        surname: '',
        email: '',
        age: '',
        street: '',
        city: '',
        postcode: '',
        skills: [],
        about: ''
      },
      formErrors: {
          gender: '',
          forename: '',
          surname: '',
          email: '',
          age: '',
          street: '',
          city: '',
          postcode: '',
          skills: '',
          about: ''
        }
    })
  }

  handleInput = (e) => {
    
    const { name, value } = e.target;
    const formErrors = { ...this.state.formErrors };

    switch (name) {
      case "forename":
        formErrors.forename = value.length < 3 ? "Minimum 3 characaters required" : "";
        break;
      case "surname":
        formErrors.surname = value.length < 3 ? "Minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value) ? "" : "Invalid email address";
        break;
      case "age":
        formErrors.age = value.length > 2 ? "Maximum 2 numerics allowed" : "";
        break;
      case "street":
        formErrors.street = value.length < 3 ? "Minimum 3 characaters required" : "";
        break;
      case "city":
        formErrors.city = value.length < 3 ? "Minimum 3 characaters required" : "";
        break;
      case "postcode":
        formErrors.postcode = value.length < 3 ? "Minimum 3 characaters required" : "";
        break;
      case "about":
        formErrors.about = value.length < 3 ? "Minimum 3 characaters required" : "";
        break;
      default:
        break;
    }
    
    this.setState({ formErrors }, () => console.log(this.state.formErrors)); 

    this.setState(prevState => ({
      newUser:
        { ...prevState.newUser, [name]: value }
    }), () => console.log(this.state.newUser));
  }

  handleCheckBox = (e) => {

    const newSelection = e.target.value;
    const formErrors = { ...this.state.formErrors };
    let newSelectionArray;

    if (this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }

    formErrors.skills = newSelectionArray.length === 0 ? "Minimum 1 selection required" : "";
    this.setState({ formErrors }, () => console.log(this.state.formErrors));

    this.setState(prevState => ({
      newUser:
        { ...prevState.newUser, skills: newSelectionArray }
    }), () => console.log(this.state.newUser))
  }
  
  render() {

    const formErrors = { ...this.state.formErrors };

    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <Select title={'Gender'}
          name={'gender'}
          options={this.state.genderOptions}
          value={this.state.newUser.gender}
          placeholder={'Select Gender'}
          handlechange={this.handleInput}
        />
        <Input inputtype={'text'}
          title={'Forename'}
          name={'forename'}
          value={this.state.newUser.forename}
          placeholder={'Enter your forename'}
          handlechange={this.handleInput}
          className={formErrors.forename.length > 0 ? "form-control error" : "form-control"}
          errorMessage={formErrors.forename.length > 0 ? `${formErrors.forename}` : ""}
        />
        <Input inputtype={'text'}
          title={'Surname'}
          name={'surname'}
          value={this.state.newUser.surname}
          placeholder={'Enter your surname'}
          handlechange={this.handleInput}
          className={formErrors.surname.length > 0 ? "form-control error" : "form-control"}
          errorMessage={formErrors.surname.length > 0 ? `${formErrors.surname}` : ""}
        />
        <Input inputtype={'text'}
          title={'Email'}
          name={'email'}
          value={this.state.newUser.email}
          placeholder={'Enter your email address'}
          handlechange={this.handleInput}
          className={formErrors.email.length > 0 ? "form-control error" : "form-control"}
          errorMessage={formErrors.email.length > 0 ? `${formErrors.email}` : ""}
        />
        <Input inputtype={'number'}
          title={'Age'}
          name={'age'}
          value={this.state.newUser.age}
          placeholder={'Enter your age'}
          handlechange={this.handleInput}
          className={formErrors.age.length > 0 ? "form-control error" : "form-control"}
          errorMessage={formErrors.age.length > 0 ? `${formErrors.age}` : ""}
        />
        <Input inputtype={'text'}
          title={'Street/Nr'}
          name={'street'}
          value={this.state.newUser.street}
          placeholder={'Enter your street and house number'}
          handlechange={this.handleInput}
          className={formErrors.street.length > 0 ? "form-control error" : "form-control"}
          errorMessage={formErrors.street.length > 0 ? `${formErrors.street}` : ""}
        />
        <Input inputtype={'text'}
          title={'City'}
          name={'city'}
          value={this.state.newUser.city}
          placeholder={'Enter your city'}
          handlechange={this.handleInput}
          className={formErrors.city.length > 0 ? "form-control error" : "form-control"}
          errorMessage={formErrors.city.length > 0 ? `${formErrors.city}` : ""}
        />
        <Input inputtype={'text'}
          title={'Postal code'}
          name={'postcode'}
          value={this.state.newUser.postcode}
          placeholder={'Enter your postal code'}
          handlechange={this.handleInput}
          className={formErrors.postcode.length > 0 ? "form-control error" : "form-control"}
          errorMessage={formErrors.postcode.length > 0 ? `${formErrors.postcode}` : ""}
        />
        <Checkbox title={'Skills'}
          name={'skills'}
          options={this.state.skillOptions}
          selectedoptions={this.state.newUser.skills}
          handlechange={this.handleCheckBox}
          errorMessage={formErrors.skills.length > 0 ? `${formErrors.skills}` : ""}
        />
        <Textarea
          title={'About you'}
          rows={10}
          value={this.state.newUser.about}
          name={'about'}
          handleChange={this.handleInput}
          placeholder={'Describe your experience and skills'} 
          className={formErrors.about.length > 0 ? "form-control error" : "form-control"}
          errorMessage={formErrors.about.length > 0 ? `${formErrors.about}` : ""}
        />
        <Button
          action={this.handleFormSubmit}
          type={'primary'}
          title={'Submit'}
        />
        <Button
          action={this.handleClearForm}
          type={'secondary'}
          title={'Clear'}
        />
      </form>
    );
  }
}

export default Form;