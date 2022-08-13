import React, { ReactNode } from 'react';
import { Container } from './Layout.styles';
import { Header } from '../Header/Header';

export type LayoutProps = {
  children?: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <Container>
    <div>
      <Header />
    </div>
    <div>{children}</div>
    <div>footer</div>
  </Container>
);
