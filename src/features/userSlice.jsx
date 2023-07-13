import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    entities:{
      1:{name:"John"}
    }
  },
  reducers: {},
});

// export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default userSlice.reducer;
