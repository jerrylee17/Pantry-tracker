import React from 'react';
import NavBar from './NavBar';

export default function NavBarWrapper({
  component: Component,
  ...props
}) {
  return (
    <>
      <NavBar {...props} />
      <Component {...props} />
    </>
  );
}
