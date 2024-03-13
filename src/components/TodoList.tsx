import  { useState } from 'react';
import { useCreateTodoMutation, useGetTodoQuery as useGetTodoQuery, useDeleteTodoMutation } from '../redux/api/crud';

const TodoList = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const { data, isLoading } = useGetTodoQuery();
  const [createTodo] = useCreateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation(); 
  console.log(data);

  const addTodo = async () => {
    const createData = {
      firstName,
      lastName
    };
    await createTodo(createData);
  };

  const handleDelete = async (id:number) => {
    await deleteTodo(id);
  };

  return (
    <div>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      {isLoading ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <>
          {data?.map((item) => (
            <div key={item._id}>
              <h1>{item.firstName}</h1>
              <button onClick={() => handleDelete(item._id!)}>Delete</button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default TodoList;
