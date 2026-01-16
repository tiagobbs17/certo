"use client";

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import {
  PersonalizedRecipeSuggestionsInputSchema,
  type PersonalizedRecipeSuggestionsOutput,
} from '@/ai/schemas/personalized-recipe-suggestions';
import { getPersonalizedRecipe } from '@/app/actions';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

type FormData = z.infer<typeof PersonalizedRecipeSuggestionsInputSchema>;

export function RecipeCustomizer() {
  const [isPending, startTransition] = useTransition();
  const [recipe, setRecipe] = useState<PersonalizedRecipeSuggestionsOutput | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(PersonalizedRecipeSuggestionsInputSchema),
    defaultValues: {
      dietaryRestrictions: '',
      availableIngredients: '',
      flavorPreferences: '',
    },
  });

  const onSubmit = (data: FormData) => {
    startTransition(async () => {
      const result = await getPersonalizedRecipe(data);
      if (result.success && result.data) {
        setRecipe(result.data);
        setIsDialogOpen(true);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error,
        });
      }
    });
  };

  return (
    <>
      <div className="container mx-auto max-w-2xl px-4">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl">Personaliza tu Receta con IA</CardTitle>
            <CardDescription className="text-lg">
              ¿No tienes todos los ingredientes o tienes alguna alergia? Describe tus necesidades y nuestra IA creará una receta de mini donut única para ti.
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="dietaryRestrictions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Restricciones Dietéticas</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej: sin gluten, vegano, sin lactosa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="flavorPreferences"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferencias de Sabor</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej: más dulce, con un toque cítrico, salado" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="availableIngredients"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ingredientes Disponibles</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Lista los ingredientes que tienes en casa. Ej: harina, huevos, chocolate amargo, naranjas..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isPending} className="w-full font-bold" size="lg">
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generando...
                    </>
                  ) : (
                    'Generar Receta Personalizada'
                  )}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl">{recipe?.recipeName}</DialogTitle>
            <DialogDescription>{recipe?.reasoning}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-4">
              <div>
                <h3 className="font-bold font-headline text-lg mb-2">Ingredientes:</h3>
                <p className="whitespace-pre-wrap text-sm text-muted-foreground">{recipe?.ingredients}</p>
              </div>
              <div>
                <h3 className="font-bold font-headline text-lg mb-2">Instrucciones:</h3>
                <p className="whitespace-pre-wrap text-sm text-muted-foreground">{recipe?.instructions}</p>
              </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
