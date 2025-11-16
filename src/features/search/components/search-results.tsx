'use client';

import { useSearchParams } from 'next/navigation';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || '';

  // Your search logic here
  // Fetch articles based on query and category

  return (
    <div>
      <h1>Search Results</h1>
      {query && <p>Searching for: {query}</p>}
      {category && <p>Category: {category}</p>}
      {/* Display results */}
    </div>
  );
}
