import React from 'react';
import { Outlet } from 'react-router';

import HeaderPage from '../components/header-page/HeaderPage';

export default function LayoutPage() {
  return (
    <>
      <HeaderPage />
      <Outlet />
    </>
  );
}
