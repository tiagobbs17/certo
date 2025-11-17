'use server';

import { 
  personalizedRecipeSuggestions
} from '@/ai/flows/personalized-recipe-suggestions';
import { 
  type PersonalizedRecipeSuggestionsInput,
  type PersonalizedRecipeSuggestionsOutput
} from '@/ai/schemas/personalized-recipe-suggestions';


type ActionResult = {
  success: boolean;
  data?: PersonalizedRecipeSuggestionsOutput;
  error?: string;
};

export async function getPersonalizedRecipe(input: PersonalizedRecipeSuggestionsInput): Promise<ActionResult> {
  try {
    const result = await personalizedRecipeSuggestions(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error generating personalized recipe:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, error: `Failed to generate recipe. ${errorMessage}` };
  }
}
