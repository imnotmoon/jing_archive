import React, { FC } from 'react';
import { Header } from './Header';
import { Container } from './Layout.styles'

export const Layout: FC = ({ children }) => (
  <Container>
    <Header />
    {children}
  </Container>
);
