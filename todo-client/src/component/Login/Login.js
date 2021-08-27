import React, { useState } from "react";
import { useMutation, gql} from "@apollo/client";
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';


export const LOGIN_USER = gql`
mutation Mutation($userLoginEMail: String!) {
  userLogin(eMail: $userLoginEMail) {
    id
    email
  }
}
`;

function Login() {

  const history = useHistory();
   let input;
  
  const [addUser, {loading, error, data }] = useMutation(LOGIN_USER);
  
  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  console.log(error, data);
  
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='red' textAlign='center'>
        Login
      </Header>
      <Form size='large' onSubmit={(e) => {
              e.preventDefault();
              if (!input.value.trim()){
                return;
              }
              addUser({variables: {userLoginEMail: input.value}})
              input.value= " ";
              history.push("/todos");
            }} >
              <Segment>
              <input
                  placeholder="Email"
                  ref={(node) => (input = node)}/>
              </Segment>  
          <Button color='red' fluid size='large' type="submit">
            Login
          </Button>
      </Form>
    </Grid.Column>
  </Grid>

  );

}
export default Login;
