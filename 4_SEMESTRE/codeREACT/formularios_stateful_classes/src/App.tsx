import './App.css'
import React from 'react';
import FormErrorMessage from './components/formErrorMessage';
import FormInput from './components/formInput';
import FormMultipleInputs from './components/formMultipleInputs';
import FormSelect from './components/formSelect';
import FormTextArea from './components/formTextArea';
import FormValidation from './components/formValidation';
import NameFormNC from './components/namedFormNC';

export default class App extends React.Component {
  render() {
    return (
      <>
        <FormErrorMessage />
        <FormInput />
        <FormMultipleInputs />
        <FormSelect />
        <FormTextArea />
        <FormValidation />
        < NameFormNC />
      </>
    )
  }
}