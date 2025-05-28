interface Recipe {
    id: number;
    name: string;
    description: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes?: number;
    cookTimeMinutes?: number;
    servings?: number;    
    difficulty: 'Fácil' | 'Médio' | 'Difícil'; 
    categoryId: number;   
    isFavorite: boolean;  
    imageUrl?: string;    
    tags?: string[];      
  }