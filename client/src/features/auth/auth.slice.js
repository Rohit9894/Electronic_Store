import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, signup } from "./authAPI";
import { toast } from "@/hooks/use-toast";

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (credentials) => {
    try {
      const res = await signup(credentials);
      if (res?.msg == "Register sucessfully") {
        toast({
          title: "✅ Registered successfully!",
          duration: 3000,
        });
      } else {
        toast({
          variant: "destructive",
          title: res?.msg || "Invalid credentials",
          duration: 3000,
        });
        return rejectWithValue(res?.msg || "Signup failed");
      }
    } catch (err) {
      if (err?.msg == "User already exists") {
        toast({
          variant: "destructive",
          title: "User already exist",
          duration: 3000,
        });
      }
      return rejectWithValue(err?.msg || "Signup error");
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await login(credentials);
      if (res?.msg == "Login successfully") {
        toast({
          title: "✅ Login successfully!",
          duration: 3000,
        });
      }
      return res.data;
    } catch (err) {
      console.log(err);
      if (err?.msg == "Invalid credetials") {
        toast({
          variant: "destructive",
          title: "Your username or password may be incorrect!",
          duration: 3000,
        });
      }
      return rejectWithValue(err.response.data.message);
    }
  }
);

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        (state.loading = false), (state.isAuthenticated = true);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
