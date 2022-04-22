import { gql } from "@apollo/client";

export const getAllTodos = gql`
  query getAllTodos {
    todos(order_by: { is_done: asc }) {
      id
      is_done
      title
    }
  }
`;

export const getTodosByUserId = gql`
  query getTodosByUserId($_eq: Int!) {
    todos(where: { user: { id: { _eq: $_eq } } }, order_by: { is_done: asc }) {
      id
      is_done
      title
    }
  }
`;

export const getAllTodosSub = gql`
  subscription getAllTodoSub {
    todos(order_by: { is_done: asc }) {
      id
      is_done
      title
    }
  }
`;

export const addTodo = gql`
  mutation addTodo($object: todos_insert_input!) {
    insert_todos_one(object: $object) {
      title
      user {
        id
        name
      }
    }
  }
`;

export const updateTodo = gql`
  mutation updateTodo($id: Int!, $is_done: Boolean!) {
    update_todos_by_pk(pk_columns: { id: $id }, _set: { is_done: $is_done }) {
      id
      is_done
      title
    }
  }
`;

export const deleteTodo = gql`
  mutation deleteTodo($id: Int!) {
    delete_todos_by_pk(id: $id) {
      id
      title
    }
  }
`;
