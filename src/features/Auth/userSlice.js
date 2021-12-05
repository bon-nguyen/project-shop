import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userApi from '../../api/userApi';


const initialState = {
  current: {},
  settings: {},
}

// First, create the thunk
const fetchUserById = createAsyncThunk(
    'user/register',
    async (payload) => {
      const data = await userApi.fetchById(payload);

      // save data to local storage
      localStorage.setItem('access_token', data.jwt);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      return data.user;
    }
);
  

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchUserById.fulfilled]: (state, action) => {
        state.current = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
const { reducer} = userSlice;

export default reducer;