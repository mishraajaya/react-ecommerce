import React from 'react'

import MenuItem from 'components/common/menu-item'

const Directory = () => {
  const imagePath = 'public/images'
  const menuItems = [
    {
      title: 'hats',
      imageUrl: `${imagePath}/homepage/hats.png`,
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: `${imagePath}/homepage/jackets.png`,
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: `${imagePath}/homepage/sneakers.png`,
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: `${imagePath}/homepage/womens.png`,
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: `${imagePath}/homepage/mens.png`,
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]

  const renderMenuItem = menuItem => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <MenuItem key={menuItem.id} subTitle="Shop Now" {...menuItem} />
  }

  return (
    <>
      <div className="directory-menu">{menuItems.map(renderMenuItem)}</div>
    </>
  )
}

export default Directory
