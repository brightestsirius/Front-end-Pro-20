import React, {Fragment} from "react";

import UserForm from "./../components/Form/UserForm";

export default function CreateUser() {
  return (
    <Fragment>
      <h3>Create User</h3>
      <UserForm createForm />
    </Fragment>
  );
}
