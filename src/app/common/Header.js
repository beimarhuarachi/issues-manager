
import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand
        href="/">
        <i
          className="fa fa-github fa-lg"
          aria-hidden="true"
          style={{paddingRight: '5px'}}
        />
        {t('common.label.header-title')}
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
