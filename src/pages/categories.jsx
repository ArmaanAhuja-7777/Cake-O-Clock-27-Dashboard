import { useEffect, useState } from 'react';
import { getAllCategories } from '../api/api';  // Import the function

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        if (data) {
          setCategories(data); // The response is an array of categories
        } else {
          setError('Failed to fetch categories');
        }
      } catch (err) {
        setError('An error occurred while fetching categories');
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <h2 className="text-xl font-semibold mb-4">All Categories</h2>
        {categories.length > 0 ? (
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category._id} className="border p-4 rounded shadow-md">
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No categories available.</p>
        )}
      </div>
    </div>
  );
}
