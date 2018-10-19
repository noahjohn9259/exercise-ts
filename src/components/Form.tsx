import * as React from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import * as shortid from "shortid";
import { postTask } from "../actions/taskActions";
import { AccountType } from "../reducers/types";
import { IApplicationState } from "../reducers/index";

interface IpropsFormComponent {
  errors: any;
  touched: any;
  isSubmitting: any;
  accounts: AccountType[];
}

interface PropsFromDispatch {
  postTask: any;
}

type AllProps = IpropsFormComponent & PropsFromDispatch;

const FormComponent: React.SFC<AllProps> = (props: AllProps) => {
  const { errors, touched, isSubmitting, accounts } = props;
  return (
    <Form>
      <div>
        {touched.title && errors.title && <p>{errors.title}</p>}
        <Field type="text" name="title" placeholder="Title" />
      </div>
      <Field component="select" name="account">
        {accounts.map(item => (
          <option key={item.id} value={item.id}>
            {item.firstname + " " + item.lastname}
          </option>
        ))}
      </Field>
      <button disabled={isSubmitting} type="submit">
        Add Task
      </button>
    </Form>
  );
};

const FormikApp = withFormik({
  mapPropsToValues() {
    return {
      title: "",
      account: "1"
    };
  },
  validationSchema: Yup.object().shape({
    title: Yup.string()
      .min(3)
      .required()
  }),
  handleSubmit(values, formikBag) {
    const { resetForm, setSubmitting, props } = formikBag;
    const { postTask } = props;

    const taskId = shortid.generate();
    const accountId = values.account;
    const payload = { title: values.title, id: taskId, accountId: accountId };
    postTask(payload);
    resetForm();
    setSubmitting(false);
  }
})(FormComponent);

const mapStateToProps = (state: IApplicationState) => {
  return {
    accounts: state.accounts
  };
};

const mapDispatchToProps = {
  postTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormikApp);
