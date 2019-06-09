
import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

export const IssuesSelectorForm = ({ getIssues: getIssuesAction, updateAppInfo: updateInfo }) => {
  const { t } = useTranslation();
  return (
    <Formik
      initialValues={{githubUser: '', repo: ''}}
      onSubmit={(values) => {
        const { githubUser, repo } = values;
        if (githubUser && repo) {
          getIssuesAction(githubUser, repo);
          updateInfo({ githubUser, repo });
        }
      }}
      render={({
        values,
        handleSubmit,
        handleBlur,
        handleChange,
      }) => (
        <Form
          onSubmit={handleSubmit}
          className='issues-selector-form'
          inline
          style={{padding: '20px 0px 20px 0px'}}
        >
          <FormGroup className='pr-2'>
            <Label for="githubUser" hidden>
              {t('issues-form.label.github-user')}
            </Label>
            <Input
              value={values.githubUser}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="githubUser"
              id="githubUser"
              placeholder={t('issues-form.label.github-user')}
            />
          </FormGroup>
          {' '}
          <FormGroup className='pr-2'>
            <Label for="repo" hidden>{t('issues-form.label.repo')}</Label>
            <Input
              value={values.repo}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="repo"
              id="repo"
              placeholder={t('issues-form.label.repo')}
            />
          </FormGroup>
          {' '}
          <Button
            type='submit'
            disabled={!values.githubUser || !values.repo}
          >
            {t('issues-form.action.show-issues')}
          </Button>
        </Form>
      )}
    />
  );
};

export default IssuesSelectorForm;
