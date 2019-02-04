import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../store/actions/todoActions";

import { Col, Row } from "antd";

import Home from "../components/Home";

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    return (
      <div>
        <Row>
          <Col span={4}>sider</Col>
          <Col span={19}>
            <Home todos={this.props.todos} />
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  };
};
export default connect(
  mapStateToProps,
  { fetchTodos }
)(HomePage);
