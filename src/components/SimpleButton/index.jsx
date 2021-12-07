import React from "react"
import PropTypes from "prop-types"

const SimpleButton = ({ text }) => {
  return (
    <div>
      <button>{text}</button>
    </div>
  )
}

SimpleButton.propTypes = {
  text: PropTypes.string.isRequired,
}

export default SimpleButton
