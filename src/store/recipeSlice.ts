import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Recipes } from "../types/recipe.type";

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
    const response = await axios.get<Recipes>('https://dummyjson.com/recipes');
    return response.data
})


const recipeSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: [],
        isLoading: true,
    } as Recipes,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRecipes.fulfilled, (state, action) => {
            state.recipes = action.payload.recipes
            state.isLoading = false;
        })
    }
})

export default recipeSlice.reducer;