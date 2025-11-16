import SearchSheet from '@/components/layout/navbar/search-sheet';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '../../ui/button';
import { Skiper } from './theme-toggle-button';

const CallActions = () => {
  return (
    <div className="flex items-center gap-1">
      <Skiper />
      <SearchSheet />
      <div className="h-10 w-1 mx-3 bg-border" />
      <Link href="/" className={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'h-10 lg:flex hidden')}>
        Let&apos;s Talk
      </Link>
    </div>
  );
};

export default CallActions;
