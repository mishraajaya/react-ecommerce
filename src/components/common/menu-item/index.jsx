import React from 'react'
import PropTypes from 'prop-types'

const MenuItem = ({ imageUrl, size, subTitle, title }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <div className="title">{title}</div>
        <div className="sutitle">{subTitle}</div>
      </div>
    </div>
  )
}

MenuItem.defaultProps = {
  size: ''
}

MenuItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default MenuItem
