import React, { useEffect, useState } from 'react'
import CollectionPreview from 'components/common/collection-preview'

import SHOP_DATA from 'data/shopData'

const ShopMain = () => {
  const [shopData, setShopData] = useState([])

  useEffect(() => {
    setShopData(SHOP_DATA)
  }, [])

  const renderShopData = data => {
    return <CollectionPreview key={data.id} title={data.title} items={data.items} />
  }

  return shopData.map(renderShopData)
}

export default ShopMain
