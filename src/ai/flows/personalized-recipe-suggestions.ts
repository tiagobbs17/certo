'use server';

/**
 * @fileOverview A personalized panettone recipe suggestion AI agent.
 *
 * - personalizedRecipeSuggestions - A function that generates personalized panettone recipe suggestions.
 */

import {ai} from '@/ai/genkit';
import { 
  PersonalizedRecipeSuggestionsInputSchema, 
  type PersonalizedRecipeSuggestionsInput,
  PersonalizedRecipeSuggestionsOutputSchema,
  type PersonalizedRecipeSuggestionsOutput 
} from '@/ai/schemas/personalized-recipe-suggestions';


export async function personalizedRecipeSuggestions(
  input: PersonalizedRecipeSuggestionsInput
): Promise<PersonalizedRecipeSuggestionsOutput> {
  return personalizedRecipeSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecipeSuggestionsPrompt',
  input: {schema: PersonalizedRecipeSuggestionsInputSchema},
  output: {schema: PersonalizedRecipeSuggestionsOutputSchema},
  prompt: `You are an expert panettone recipe creator. A user will provide their dietary restrictions, available ingredients, and flavor preferences. You will generate a personalized panettone recipe tailored to their needs and tastes.

Dietary Restrictions: {{{dietaryRestrictions}}}
Available Ingredients: {{{availableIngredients}}}
Flavor Preferences: {{{flavorPreferences}}}

Based on these inputs, create a unique panettone recipe. Be sure to provide the Recipe Name, ingredients, instructions, and reasoning behind the recipe suggestion.

Recipe Name:
Ingredients:
Instructions:
Reasoning:`, 
});

const personalizedRecipeSuggestionsFlow = ai.defineFlow(
  {
    name: 'personalizedRecipeSuggestionsFlow',
    inputSchema: PersonalizedRecipeSuggestionsInputSchema,
    outputSchema: PersonalizedRecipeSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
