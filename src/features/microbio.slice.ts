import { mockMicrobio } from "@/assets/mock/mock";
import type { IMicrobio } from "@/interfaces/domain/culture.interface";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IAppState {
  ui: {
    isLoading: boolean;
    isDishCollapsed: boolean;
    isColonyCollapsed: boolean;
  }
  data: IMicrobio;
}

const initialState: IAppState = {
  ui: {
    isLoading: false,
    isDishCollapsed: false,
    isColonyCollapsed: false,
  },
  data: mockMicrobio,
};

export const microbioSlice = createSlice({
  name: "microbio",
  initialState,
  reducers: {
    reset: () => initialState,
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.ui.isLoading = action.payload;
    },
    setIsDishCollapsed: (state, action: PayloadAction<boolean>) => {
      state.ui.isDishCollapsed = action.payload;
    },
    setIsColonyCollapsed: (state, action: PayloadAction<boolean>) => {
      state.ui.isColonyCollapsed = action.payload;
    },
  },
});

export const { reset, setIsLoading, setIsDishCollapsed, setIsColonyCollapsed } = microbioSlice.actions;
