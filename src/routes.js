import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Create from './Components/Create'
import List from './Components/List'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component = {List} />
                <Route path = "/create" component = {Create} />
            </Switch>
        </BrowserRouter>
    )
}