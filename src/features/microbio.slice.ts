import { mockMicrobio } from "@/assets/mock/mock";
import { EMedium } from "@/enums/microbio.enums";
import type { IColony, IDish, IMicrobio } from "@/interfaces/domain/culture.interface";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface IAppState {
  ui: {
    isLoading: boolean;
    isDishCollapsed: boolean;
    isColonyCollapsed: boolean;
  };
  data: IMicrobio;
  selected: {
    dishId: string | null;
    colonyId: string | null;
  };
}

const initialState: IAppState = {
  ui: {
    isLoading: false,
    isDishCollapsed: false,
    isColonyCollapsed: false,
  },
  data: mockMicrobio,
  selected: {
    dishId: null,
    colonyId: null,
  },
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
    addDish: (state) => {
      const id = uuidv4();
      const number = `1-${state.data.culture.dishes.length + 1}`;
      const newDish: IDish = {
        id,
        number,
        medium: EMedium.BLOOD_AGAR,
        growth: false,
        colonies: [],
      };
      state.data.culture.dishes.push(newDish);
    },
    deleteDish: (state, action: PayloadAction<string>) => {
      const dishId = action.payload;
      const dishes = state.data.culture.dishes;
      const idx = dishes.findIndex((d) => d.id === dishId);
      if (idx !== -1) dishes.splice(idx, 1);
      if (state.selected.dishId === dishId) {
        state.selected.dishId = null;
      }
    },
    addColony: (state, action: PayloadAction<string>) => {
      const dishId = action.payload;
      const dish = state.data.culture.dishes.find((d) => d.id === dishId);
      if (!dish) return;
      const newColony: IColony = {
        id: uuidv4(),
        dishId,
        number: "1-2",
        biochemicalTests: [],
        identification: null,
        massSpectrometry: [],
        antibiogram: null,
      };
      dish.colonies.push(newColony);
    },
    deleteColony: (state, action: PayloadAction<string>) => {
      const colonyId = action.payload;
      for (const dish of state.data.culture.dishes) {
        const idx = dish.colonies.findIndex((c) => c.id === colonyId);
        if (idx !== -1) {
          dish.colonies.splice(idx, 1);
          break;
        }
      }
    },
    selectDish: (state, action: PayloadAction<string>) => {
      state.selected.dishId = action.payload;
    },
    selectColony: (state, action: PayloadAction<string>) => {
      state.selected.colonyId = action.payload;
    },
  },
});

export const {
  reset,
  setIsLoading,
  setIsDishCollapsed,
  setIsColonyCollapsed,
  addDish,
  deleteDish,
  addColony,
  deleteColony,
  selectDish,
} = microbioSlice.actions;
