import React from 'react';
import { NavLink} from 'react-router-dom';

const Header= () => (
    <header>
      <div>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="isActive" exact={true}>Dashboard</NavLink>
        <br/>
        <NavLink to="/create" activeClassName="isActive">Create a new expense</NavLink>
        <br/>
        <NavLink to="/help" activeClassName="isActive">Need help?</NavLink>
      </div>
    </header>
  );

  export default Header;