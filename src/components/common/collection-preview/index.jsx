import React from 'react'
import PropTypes from 'prop-types'
import CollectionItem from 'components/common/collection-item'

const CollectionPreview = ({ items, title }) => {
  const renderItems = item => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <CollectionItem key={item.id} {...item} />
  }
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">{items.filter((item, idx) => idx < 4).map(renderItems)}</div>
    </div>
  )
}

CollectionPreview.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

export default CollectionPreview
