import React from "react";
import { List, Card } from "antd";

const Home = props => {
  console.log("HomePage props", props);

  const { todos } = props;
  return (
    <div>
      <h2>HomePage new app</h2>
      <List
        loading={todos ? false : true}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3
        }}
        dataSource={todos}
        renderItem={item => (
          <List.Item>
            <Card title={`Id задачи: ${item.id}`}>{item.title}</Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Home;
