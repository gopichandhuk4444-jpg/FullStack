import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  list: [
  {
    id: 101,
    title: 'Classic Spaghetti Carbonara',
    description: 'A simple, traditional Italian pasta dish made with eggs, hard cheese, cured pork, and black pepper.',
    ingredients: 'spaghetti, guanciale (or pancetta), eggs, pecorino romano cheese, black pepper',
    prepTime: 15
  },
  {
    id: 10,
    title: 'Classic Beef Bolognese Sauce',
    description: 'A true Bolognese sauce is a labor of love, a slow-simmered meat sauce (ragù) originating from Bologna, Italy. It is distinct from simple meat sauce because it uses a mix of beef and sometimes pork, a small amount of milk to tenderize the meat, a touch of white wine, and a long cooking time (at least two hours) to develop depth of flavor. The sauce should be thick and rich, designed to cling to flat pasta like tagliatelle, not spaghetti. The mirepoix base of carrot, celery, and onion provides a sweet foundation. This is the ultimate Sunday project meal that results in multiple servings of hearty, savory goodness that freezes beautifully for future meals.',
    ingredients: 'ground beef, ground pork, tomatoes, onions, carrots, celery, milk, white wine, tagliatelle pasta, olive oil',
    prepTime: 120
  },
  {
    id: 102,
    title: 'Quick Chicken Stir-Fry',
    description: 'A fast and healthy weeknight meal packed with vegetables and a savory sauce.',
    ingredients: 'chicken breast, broccoli, bell peppers, soy sauce, garlic, ginger, rice',
    prepTime: 20
  },
  {
    id: 103,
    title: 'Vegetable Lasagna',
    description: 'A comforting vegetarian lasagna layered with ricotta cheese, marinara sauce, and fresh vegetables.',
    ingredients: 'lasagna noodles, ricotta cheese, mozzarella cheese, spinach, zucchini, marinara sauce',
    prepTime: 45
  },
    {
    id: 4,
    title: 'Authentic Margherita Pizza',
    description: 'There is nothing quite like a traditional Italian pizza. This recipe focuses on simple, high-quality ingredients to honor the flag colors of Italy. The base is a well-fermented dough stretched thin, topped only with San Marzano tomato sauce, fresh mozzarella cheese slices, a few fresh basil leaves, and a drizzle of extra virgin olive oil. The key is baking it in a very hot oven to achieve a perfectly charred crust and melted cheese. This minimalist approach allows each ingredient to shine. The freshness of the basil against the sweet tomatoes and creamy mozzarella makes for an exquisite culinary experience. Perfect for a Friday night, it brings the authentic pizzeria experience right into your own kitchen with minimal effort but maximum flavor impact.',
    ingredients: 'pizza dough, San Marzano tomatoes, fresh mozzarella, basil, olive oil, salt, flour',
    prepTime: 30
  },
  {
    id: 104,
    title: 'Homemade Pizza Margherita',
    description: 'A classic Neapolitan pizza with fresh basil, mozzarella, and tomatoes.',
    ingredients: 'pizza dough, tomato sauce, fresh mozzarella, basil, olive oil, salt',
    prepTime: 30
  },
  {
    id: 105,
    title: 'Beef Tacos',
    description: 'Easy ground beef tacos with your favorite toppings for a fun dinner.',
    ingredients: 'ground beef, taco seasoning, corn tortillas, lettuce, tomato, cheese, salsa',
    prepTime: 25
  },
  {
    id: 106,
    title: 'Simple Garden Salad',
    description: 'A crisp and refreshing side salad with a light vinaigrette.',
    ingredients: 'lettuce, cucumber, tomatoes, red onion, vinaigrette dressing',
    prepTime: 10
  },
  {
    id: 107,
    title: 'Chocolate Chip Cookies',
    description: 'Chewy and soft chocolate chip cookies, a perfect dessert treat.',
    ingredients: 'flour, butter, brown sugar, white sugar, eggs, chocolate chips, vanilla extract',
    prepTime: 20
  },
  {
    id: 108,
    title: 'Creamy Tomato Soup',
    description: 'A rich and creamy tomato soup that pairs perfectly with a grilled cheese sandwich.',
    ingredients: 'tomatoes, heavy cream, butter, onion, vegetable broth, basil',
    prepTime: 35
  },
  {
    id: 109,
    title: 'Avocado Toast',
    description: 'A trendy and healthy breakfast option with seasoned avocado on artisanal bread.',
    ingredients: 'bread, avocado, lime juice, red pepper flakes, salt, pepper, olive oil',
    prepTime: 5
  },
  {
    id: 110,
    title: 'Lemon Herb Salmon',
    description: 'Baked salmon fillets seasoned with fresh lemon and herbs.',
    ingredients: 'salmon fillets, lemon, dill, parsley, olive oil, salt, pepper',
    prepTime: 22
  }
  ]
}
const recipeSlice = createSlice({

  name: 'recipes',
  initialState,
  reducers: {
    add_recipe: (state, action) => {
      state.list.push(action.payload);
    },
    delete_recipe: (state, action) => {
      state.list = state.list.filter((recipe) => recipe.id !== action.payload);
    },

  },
});


export const { add_recipe, delete_recipe } = recipeSlice.actions
export default recipeSlice.reducer