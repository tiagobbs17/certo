/**
 * @fileOverview Schemas for the personalized mini donut recipe suggestion AI agent.
 */
import { z } from 'zod';

export const PersonalizedRecipeSuggestionsInputSchema = z.object({
  dietaryRestrictions: z
    .string()
    .describe(
      'Any dietary restrictions the user has, such as gluten-free, dairy-free, or vegan.'
    ),
  availableIngredients: z
    .string()
    .describe('A list of ingredients the user has available.'),
  flavorPreferences: z
    .string()
    .describe(
      'The users preferred flavor preferences, such as sweet, savory, or spicy.'
    ),
});
export type PersonalizedRecipeSuggestionsInput = z.infer<
  typeof PersonalizedRecipeSuggestionsInputSchema
>;

export const PersonalizedRecipeSuggestionsOutputSchema = z.object({
  recipeName: z.string().describe('The name of the personalized recipe.'),
  ingredients: z.string().describe('A list of ingredients for the recipe.'),
  instructions: z.string().describe('Instructions for preparing the recipe.'),
  reasoning: z.string().describe('Explanation for the specific recipe suggestion based on the inputs.'),
});
export type PersonalizedRecipeSuggestionsOutput = z.infer<
  typeof PersonalizedRecipeSuggestionsOutputSchema
>;
