import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const recipeApi = createApi({
    reducerPath:'recipeApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://dummyjson.com/'}),
    tagTypes:['Recipes'],
    endpoints:(builder)=>({
        getRecipes:builder.query({
            query:()=>'recipes',
            providesTags:['Recipes']
        }),
        getRecipe:builder.query({
            query:({id})=>`recipes/${id}`

        })
    })
})

export const { useGetRecipesQuery ,useGetRecipeQuery } =recipeApi  