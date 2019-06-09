import React from 'react';
import { Spinner, Alert } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import {
  ListGroup,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import IssueListItem from './IssueListItem';

const IssuesList = ({ issuesState }) => {
  const { t } = useTranslation();
  const { loading, loaded, error, items } = issuesState;
  const listLoading = loading
    ? (<div
      className='d-flex justify-content-center'
      style={{padding: '20px 0px 20px 0px'}}
    >
      <Spinner
        size='sm'
        color='secondary'
        style={{ width: '3rem', height: '3rem' }}
      />
    </div>)
    : null;
  const hasError = error
    ? 
    ( 
      <Alert color="danger">
        {t('issues.error.get')}
      </Alert>
    ) : null;
  const emptyList = loaded && items.length === 0
    ? 
    ( 
      <Alert color="info">
        {t('issues.label.empty-list')}
      </Alert>
    ) : null;
  const listItems = items.map(item => {
    const stateIcon = (item.state === 'open' || item.state === 'closed')
      ? (
        <i
          className="fa fa-exclamation-circle fa-lg"
          aria-hidden="true"
          style={{color: item.state === 'closed' ? 'red' : 'green', paddingRight: '5px'}}
        />
      ) : null;
    return (
      <Link
        key={item.id}
        to={`/issueDetail/${item.number}`}
        style={{textDecoration: 'none'}}
      >
        <IssueListItem
          item={item}
          stateIcon={stateIcon}
        />
      </Link>
    );
  });
  return (
    <div>
      {listLoading}
      {hasError}
      {emptyList}
      {
        loaded && items.length > 0
        ?
        <ListGroup>
          {listItems}
        </ListGroup>
        : null
      }
    </div>
  );
};

export default IssuesList;
