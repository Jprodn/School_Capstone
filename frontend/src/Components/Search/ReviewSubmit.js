import React from 'react'

const ReviewSubmit = (props) => {

  return (
    <form className="create-form">
    <input
        type="text"
        className="create-input-form"
        onChange={props.handleChange}
        placeholder="Title"
        name="title"
    />
    <input
        type="text"
        className="create-input-form"
        onChange={props.handleChange}
        name="name"
        placeholder="Name"
    />
    <textarea
        type="text"
        className="create-input-form"
        onChange={props.handleChange}
        name="review"
        placeholder="Your review here..."
    />
    <div className="create-form-action">
        <button type="Reset" className="cancel-button">
            Clear
        </button>
        <button
            type="Submit"
            className="ok-button"
            onClick={props.handleSubmit}
        >
            Submit review
        </button>
    </div>
</form>
  )
}

export default ReviewSubmit