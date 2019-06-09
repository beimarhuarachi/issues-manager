import React from 'react';
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from 'reactstrap';
import { useTranslation } from 'react-i18next';

const IssueListItem = ({ item, stateIcon }) => {
  const { t } = useTranslation();
  return (
    <ListGroupItem action>
      <ListGroupItemHeading>
        {item.title || ''}
      </ListGroupItemHeading>
      <ListGroupItemText>
        {stateIcon}
        {`#${item.number} `} 
        {t('issues.label.reported-by')}
        {` ${item.user.login}`}
        <i
          className="fa fa-comment fa-lg"
          aria-hidden="true"
          style={{paddingLeft: '5px', float: 'right'}}
        />
        <span style={{float: 'right'}}>
          {item.comments}
        </span>
      </ListGroupItemText>
    </ListGroupItem>
  );
};

export default IssueListItem;
