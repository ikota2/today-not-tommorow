import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { Stats } from "../Stats/stats";
import { Tasks } from "../Tasks/tasks";
import { Settings } from "../Settings/settings";
import { Others } from "../Others/others";
import "./main.css";

export function Main() {
  return (
    <BrowserRouter>
      <div className='main'>
        <nav>
          <div className='main__nav_link'>
            <NavLink
              className='main__nav_link_currentLink'
              activeClassName='main__nav_link_currentLink_active'
              to='/'
              exact
            >
              tasks
            </NavLink>
          </div>
          <div className='main__nav_link'>
            <NavLink
              className='main__nav_link_currentLink'
              activeClassName='main__nav_link_currentLink_active'
              to='/stats'
            >
              stats
            </NavLink>
          </div>
          <div className='main__nav_link'>
            <NavLink
              className='main__nav_link_currentLink'
              activeClassName='main__nav_link_currentLink_active'
              to='/others'
            >
              others
            </NavLink>
          </div>
          <div className='main__nav_link'>
            <NavLink
              className='main__nav_link_currentLink'
              activeClassName='main__nav_link_currentLink_active'
              to='/settings'
            >
              settings
            </NavLink>
          </div>
        </nav>

        <Route path='/' exact>
          <Tasks />
        </Route>
        <Route path='/stats'>
          <Stats />
        </Route>
        <Route path='/others'>
          <Others />
        </Route>
        <Route path='/settings'>
          <Settings />
        </Route>
      </div>
    </BrowserRouter>
  );
}
