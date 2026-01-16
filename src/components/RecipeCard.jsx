import React from 'react';

function RecipeCard({ title, image, description }) {
    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
            {/* Image Container */}
            <div className="flex justify-center items-center bg-gray-200 h-52 w-full">
                <img
                    src={image}
                    alt={title}
                    className="object-cover"
                    style={{ width: '200px', height: '200px' }}
                />
            </div>
            {/* Content */}
            <div className="p-4 bg-white text-center flex flex-col items-center">
                <h4 className="text-lg font-semibold mb-2 text-gray-800">{title}</h4>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    );
}

export default RecipeCard;
