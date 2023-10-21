import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full text-sm py-2.5 px-6 font-[500]',
  {
    variants: {
      variant: {
        filled: 'text-custom-white bg-blue-gradient',
        outlined: 'text-custom-blue border border-custom-blue',
      },
    },
    defaultVariants: {
      variant: 'filled',
    },
  },
);

export const Button = ({ children, className, variant, ...props }) => {
  return (
    <button
      type="submit"
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
