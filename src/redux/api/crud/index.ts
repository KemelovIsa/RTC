import { api as index } from '..';
import { CRUD } from './types';

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<CRUD.GetCrudResponse, CRUD.GetCrudRequest>({
      query: () => ({
        url: '',
        method: 'GET',
      }),
      providesTags: ['crud'],
    }),

    createTodo: builder.mutation<
      CRUD.CreateCrudResponse,
      CRUD.CreateCrudRequest
    >({
      query: (newData) => ({
        url: '',
        method: 'POST',
        body: newData,
      }),
      invalidatesTags: ['crud'],
    }),

    deleteTodo: builder.mutation<CRUD.DeleteCrudResponse, CRUD.DeleteCrudRequest>({
      query: (id) => ({
        url: `/${id}`, 
        method: 'DELETE',
      }),
      invalidatesTags: ['crud'],
    }),
  }),
});

export const { useGetTodosQuery: useGetTodoQuery, useCreateTodoMutation, useDeleteTodoMutation } = api;
