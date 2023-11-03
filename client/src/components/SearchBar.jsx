import { SearchIcon } from './Icons';
import { cn } from '../utils/cn';

// eslint-disable-next-line no-unused-vars
export const SearchBar = ({ className, children, searching, setSearching, placeholder }) => {
  return (
    <div
      className={cn(
        'focus-within:border-custom-blue flex items-center rounded-full bg-[#E5E5E5] px-2.5 border border-[#C8C8C8] text-custom-dark-gray',
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
        value={searching}
        onChange={(e) => setSearching(e.target.value)}
        placeholder={placeholder}
      />

      {children}
    </div>
  );
};
