import SearchResults from '@/features/search/components/search-results';
import { Suspense } from 'react';

const SearchPage = () => {
  return (
    <main id="main-content" className="custom-container pt-6">
      <Suspense fallback={<div>Loading search results...</div>}>
        <SearchResults />
      </Suspense>
    </main>
  );
};

export default SearchPage;
