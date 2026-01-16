import React from 'react';

function About() {
    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 text-center text-gray-800">About Us</h2>
            <p className="text-lg sm:text-xl mb-8 text-center text-gray-600">
                Welcome to Recipe App, where we share a variety of delicious recipes from around the world.
                Our mission is to inspire home cooks with new and exciting recipes. Whether you're looking
                for a quick weeknight dinner or planning a special occasion meal, we've got you covered!
            </p>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-gray-800">Our Story</h3>
            <p className="text-lg sm:text-xl mb-8 text-gray-700 leading-relaxed">
                Recipe App was founded by a team of passionate food enthusiasts who believe that cooking should
                be enjoyable and accessible to everyone. We started with a simple idea: to create a space where
                people can find and share recipes that make cooking easier and more enjoyable.
            </p>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-gray-800">Our Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <h4 className="text-xl font-bold mb-3 text-gray-800">Jane Doe</h4>
                    <p className="text-gray-700">Founder & CEO - Jane brings her love for cooking and technology to create a user-friendly recipe experience.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <h4 className="text-xl font-bold mb-3 text-gray-800">John Smith</h4>
                    <p className="text-gray-700">Head Chef - John develops and tests recipes to ensure they are both delicious and easy to follow.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <h4 className="text-xl font-bold mb-3 text-gray-800">Emily Johnson</h4>
                    <p className="text-gray-700">UX Designer - Emily designs the app's interface, making sure it’s intuitive and engaging for users.</p>
                </div>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-gray-800 my-8">Our Values</h3>
            <ul className="list-disc list-inside text-lg sm:text-xl text-gray-700">
                <li className="mb-3">Passion for Cooking: We love food and believe in sharing that passion with others.</li>
                <li className="mb-3">Simplicity: We strive to make our recipes easy to follow and our app easy to use.</li>
                <li className="mb-3">Community: We value the input and feedback from our users to continuously improve.</li>
            </ul>
        </div>
    );
}

export default About;
