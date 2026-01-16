import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import recipes from '../data/Recipes';

function RecipeList() {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter recipes based on search term
    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center">All Recipes</h2>
            <p className="text-lg mb-6 text-center">Browse our complete collection of recipes. Find new and exciting dishes to try at home!</p>

            {/* Search Input */}
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search recipes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-3 border border-gray-300 rounded-lg w-full max-w-md"
                />
            </div>

            {/* Recipes Grid or No Matches Message */}
            <section>
                {filteredRecipes.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredRecipes.map((recipe) => (
                            <RecipeCard key={recipe.id} {...recipe} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-lg text-gray-600 mt-6">No matches found.</p>
                )}
            </section>
        </div>
    );
}

export default RecipeList;
