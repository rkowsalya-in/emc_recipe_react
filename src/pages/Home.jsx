import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import recipes from '../data/Recipes';

function Home() {
    const featuredRecipes = recipes.slice(0, 6);

    return (
        <div className="p-6">
            {/* Welcome Section */}
            <section className="bg-white py-6 text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Welcome to the Recipe App!</h1>
                <p className="text-lg sm:text-xl mb-4">Discover a variety of delicious recipes that you can try at home. Explore our featured recipes and find your next meal inspiration.</p>
            </section>

            {/* Featured Recipes Section */}
            <section className="bg-gray-100 py-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center">Featured Recipes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {featuredRecipes.map((recipe) => (
                        <RecipeCard key={recipe.id} {...recipe} />
                    ))}
                </div>
                <div className="text-center mt-6">
                    <Link
                        to="/recipes"
                        className="inline-block px-6 py-3 bg-blue-600 text-white text-center rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                    >
                        View All Recipes
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;
