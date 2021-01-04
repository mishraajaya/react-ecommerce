import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from 'components/pages/homepage'
import ShopMain from 'components/pages/shop'
import Header from 'components/common/header'

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={ShopMain} />
      </Switch>
    </Router>
  )
}

export default Routes