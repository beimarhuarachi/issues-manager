import React from 'react';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <h3>
      {t('common.label.page-not-found')}
    </h3>
  );
}

export default NotFound;
