import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Form as LocalForm} from "react-local-form";

class Form extends Component {
  componentDidMount() {
    const {onMount, dispatch} = this.props;
    let action;

    if (!onMount) return;
    if (typeof onMount === "function") action = onMount(this.props);
    if (typeof onMount === "object" && onMount.type) action = onMount;

    action && action.type && dispatch(action);
  }

  onSubmit = values => {
    const {dispatch, onSubmit} = this.props;

    const action = onSubmit(values);

    action && action.type && dispatch(action);
  };

  render() {
    const {status, error, values, children} = this.props;

    return (
      <Fragment>
        {status === "init" && null}
        {status === "pending" && <p>Loading...</p>}
        {status === "rejected" && <p>{error}</p>}
        {status === "resolved" && (
          <LocalForm values={values} onSubmit={this.onSubmit}>
            {children}
          </LocalForm>
        )}
      </Fragment>
    );
  }
}

export default connect((state, {action}) => ({
  values: action.getResponse(state),
  error: action.getError(state),
  status: action.getStatus(state),
}))(Form);
