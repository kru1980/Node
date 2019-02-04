import React, { Component } from "react";
// import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";

// import { fetchTodos } from "./store/actions/todoActions";

class App extends Component {
  // componentDidMount() {
  //   this.props.fetchTodos();
  // }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     todos: state.todos
//   };
// };

// export default connect(
//   mapStateToProps,
//   { fetchTodos }
// )(App);
export default App;
