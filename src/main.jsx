import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from 'components/pages/homepage'

const HatsPage = () => <div>HatsPage</div>

const MainApp = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  )
}

export default MainApp
