import React, { FC } from 'react';
import { Header } from './Header';
import styles from './Layout.scss/Layout.css';

export const links = () => [
  { rel: "stylesheet", href: styles }
]


export const Layout: FC = ({ children }) => (
  <div className="layout">
    <Header />
    {children}
  </div>
);
