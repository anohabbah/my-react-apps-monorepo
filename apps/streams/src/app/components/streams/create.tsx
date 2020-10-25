import React from 'react';
import { Field, reduxForm } from 'redux-form';

export class StreamCreate extends React.Component<CreateProps> {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return <div className="ui error message">
        <div className="header">{error}</div>
      </div>;
    }

    return null;
  }

  renderInput = ({ input, label, meta }) => (
    <div className={`field ${meta.error && meta.touched ? 'error' : ''} `}>
      <label>{label}</label>
      <input {...input} />
      {this.renderError(meta)}
    </div>
  );

  onSubmit = ({ title, description }) => {};

  render() {
    return (
      <form className="ui form error" onSubmit={this.props['handleSubmit'](this.onSubmit)}>
        <Field component={this.renderInput} name="title" label=">Enter Title" />
        <Field
          component={this.renderInput}
          name="description"
          label="Enter Description"
        />

        <button className="ui button primary" type="submit">Create</button>
      </form>
    );
  }
}

/* eslint-disable-next-line */
export interface CreateProps {}

const validate = ({ description, title }) => {
  const errors = {};

  if (!title) {
    errors['title'] = 'Title field is required.';
  }

  if (!description) {
    errors['description'] = 'Description field is required.';
  }

  return errors;
}

export default reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);
