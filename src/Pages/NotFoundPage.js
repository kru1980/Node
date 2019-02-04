import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      Данной страницы не существует. <Link to="/">Вернуться на главную?</Link>
    </div>
  );
};

export default NotFoundPage;
