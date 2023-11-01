import { SearchIcon } from './Icons';
import { cn } from '../utils/cn';

export const SearchBar = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        'focus-within:border-custom-blue focus-within:text-[#1A1A1A] flex items-center rounded-full bg-[#E5E5E5] px-2.5 py-1 border border-[#C8C8C8] text-custom-dark-gray',
        className,
      )}
    >
      <label
        htmlFor='search'
        className='p-2 hover:bg-[#B8B9CF] rounded-full transition cursor-pointer w-8 h-8'
      >
        <SearchIcon />
      </label>

      <input
        id='search'
        name='search'
        type='search'
        className='w-full border-0 ring-0 focus-visible:border-0 focus-visible:ring-0 bg-transparent px-0'
        {...props}
      />

      {children}
    </div>
  );
};
