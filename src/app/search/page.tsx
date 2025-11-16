import SearchResults from '@/features/search/components/search-results';
import { Suspense } from 'react';

const SearchPage = () => {
  return (
    <main id="main-content" className="custom-container">
      <Suspense fallback={<div>Loading search results...</div>}>
        <SearchResults />
      </Suspense>
    </main>
  );
};

export default SearchPage;
