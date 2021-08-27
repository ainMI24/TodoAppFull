import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import TodoPage from './component/Todo/TodoPage'
import Login from './component/Login/Login'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
  headers: {
    authorization: localStorage.getItem("token") || ""
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route path="/todos">
              <TodoPage/>
            </Route>
            <Route path="/">
              <Login/>
            </Route>
          </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
