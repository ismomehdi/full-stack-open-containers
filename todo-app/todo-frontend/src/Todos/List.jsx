import { Todo } from "./Todo"

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  if (!todos) return null

  return (
    <>
      {todos.map(todo => {
        return <Todo onClickDelete={onClickDelete} todo={todo} onClickComplete={onClickComplete} key={todo._id} />
      }).reduce((acc, cur) => [...acc, <hr key={`hr-${acc}`} />, cur], [])}
    </>
  )
}

export default TodoList

