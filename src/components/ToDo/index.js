import React from 'react';

import AddTodo from '../../containers/ToDo/AddTodo';
import VisibleTodoList from '../../containers/ToDo/VisibleTodoList';
import Footer from '../../components/ToDo/Footer';

const TodoPage = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
};

export default TodoPage;
