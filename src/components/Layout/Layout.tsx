import React, { ReactNode } from 'react';
import { Container } from './Layout.css';
import { Header } from '../Header/Header';
import { Footer } from '../Footer';

export type LayoutProps = {
  children?: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <Container>
    <div>
      <Header />
    </div>
    <div>{children}</div>
    <Footer />
  </Container>
);
