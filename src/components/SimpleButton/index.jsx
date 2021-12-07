import React from "react"
import PropTypes from "prop-types"

const SimpleButton = ({ text }) => {
  return (
    <button name="username" data-testid="username">
      {text}
    </button>
  )
}

SimpleButton.propTypes = {
  text: PropTypes.string.isRequired,
}

export default SimpleButton
