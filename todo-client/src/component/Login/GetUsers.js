import React, { useEffect, useState } from "react";
import { useQuery, gql} from "@apollo/client";

const LOAD_USERS = gql`
 query Query {
  getUsers {
    id
    email
  }
}
`;

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    if (data) {
      setUsers(data.getUsers);
    }
  }, [data]);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  

  console.log(data);
  console.log(loading);
  console.log(error);

  return (
    <div>
      {" "}
      {users.map((val) => {
        return <h1> {val.email}</h1>;
      })}
    </div>
  );
}

export default GetUsers;
