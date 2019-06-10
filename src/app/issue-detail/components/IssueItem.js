import React from 'react';
import {
  Card, 
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';
import { useTranslation } from 'react-i18next';

const IssueItem = ({ issue }) => {
  const { t } = useTranslation();
  return (
    <Card>
      <CardBody>
        <CardTitle style={{fontSize: '2rem'}}>
          {issue.title}
        </CardTitle>
        <CardText>
          <strong>Milestone:</strong>
          {issue.milestone ?
            ` ${issue.milestone.title}` : ` ${t('common.label.none')}`
          }
        </CardText>
        {issue.user && (<CardText>
            <small className="text-muted">
              {t('issue-detail.label.opened-by')}
              {` ${issue.user.login}`}
              {`- ${issue.comments} `}
              {t('issue-detail.label.comments')}
            </small>
          </CardText>
        )}
      </CardBody>
    </Card>
  );
};

export default IssueItem;
