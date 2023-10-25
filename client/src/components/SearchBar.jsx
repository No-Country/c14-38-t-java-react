import { SearchIcon } from './Icons';
import { cn } from '../utils/cn';

export const SearchBar = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        'flex items-center rounded-full bg-[#E5E5E5] px-2.5 border border-[#C8C8C8] text-custom-dark-gray',
        className,
      )}
    >
      <label htmlFor='search' className='pl-2'>
        <SearchIcon />
      </label>

      <input
        id='search'
        name='search'
        type='search'
        className='max-w-[136px] sm:max-w-full sm:w-full border-0 ring-0 focus-visible:border-0 focus-visible:ring-0 bg-transparent'
        {...props}
      />

      {children}
    </div>
  );
};
