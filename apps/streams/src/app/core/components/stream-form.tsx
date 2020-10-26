import React from 'react';
import { Field, reduxForm, propTypes } from 'redux-form';

export interface StreamFormProps {
  onSubmit: (values: unknown) => void;
  initialValues?: unknown;
}

export class StreamForm extends React.Component<StreamFormProps & propTypes> {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return <div className="ui error message">
        <div className="header">{error}</div>
      </div>;
    }

    return null;
  };

  renderInput = ({ input, label, meta }) => (
    <div className={`field ${meta.error && meta.touched ? 'error' : ''} `}>
      <label>{label}</label>
      <input {...input} />
      {this.renderError(meta)}
    </div>
  );

  onSubmit = ({ title, description }) => {
    this.props.onSubmit({ title, description })
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field component={this.renderInput} name="title" label="Enter Title" />
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

const validate = ({ description, title }) => {
  const errors = {};

  if (!title) {
    errors['title'] = 'Title field is required.';
  }

  if (!description) {
    errors['description'] = 'Description field is required.';
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);

