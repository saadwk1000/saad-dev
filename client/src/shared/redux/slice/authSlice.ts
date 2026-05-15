import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export interface LoginCredentials {
  email: string;
  password: string;
}

interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
}

interface AuthState {
  user: UserProfile | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

interface ApiErrorResponse {
  message?: string;
}

const initialState: AuthState = {
  user: null,
  token: sessionStorage.getItem("token"),
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk<
  { user: UserProfile; token: string },
  LoginCredentials,
  { rejectValue: string }
>("auth/loginUser", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      "https://saad-dev-3i23.onrender.com/api/auth/login",
      credentials,
    );

    sessionStorage.setItem("token", response.data.token);
    return response.data;
  } catch (err) {
    const axiosError = err as AxiosError<ApiErrorResponse>;
    return rejectWithValue(
      axiosError.response?.data?.message || "Invalid credentials",
    );
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuth: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.loading = false;
      sessionStorage.removeItem("token");
      localStorage.removeItem("token");
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      sessionStorage.removeItem("token");
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export const { logout, resetAuth } = authSlice.actions;
export default authSlice.reducer;
