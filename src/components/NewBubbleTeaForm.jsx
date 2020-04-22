import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewBubbleTeaForm(props){

  function handleNewBubbleTeaFormSubmission(event) {
    event.preventDefault();
    props.onNewBubbleTeaCreation({name: event.target.name.value, ingredient: event.target.ingredient.value, quantity: event.target.quantity.value, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewBubbleTeaFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Bubble tea name' />
        <input
          type='text'
          name='ingredient'
          placeholder='ingredient' />
        <input
          type='number'
          name='quantity'
          placeholder='Quantity.' />
        <button type='submit'>Restock</button>
      </form>
    </React.Fragment>
  );
}

NewBubbleTeaForm.propTypes = {
  onNewBubbleTeaCreation: PropTypes.func
};

export default NewBubbleTeaForm;