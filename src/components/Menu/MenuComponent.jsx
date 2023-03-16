import React from 'react';
import { Link } from 'react-router-dom';
import './MenuComponent.css';

function MenuComponent() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/cripto'>Cripto</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuComponent;