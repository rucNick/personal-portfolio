import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const Button = React.forwardRef(
  ({ as: Component = 'button', variant = 'default', className, children, ...props }, ref) => {
    const baseClasses =
      'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantClasses =
      variant === 'outline'
        ? 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-black'
        : 'bg-green-400 text-black hover:bg-green-300';
    return (
      <Component ref={ref} className={clsx(baseClasses, variantClasses, className)} {...props}>
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';

Button.propTypes = {
  as: PropTypes.elementType,
  variant: PropTypes.oneOf(['default', 'outline']),
  className: PropTypes.string,
  children: PropTypes.node,
};
