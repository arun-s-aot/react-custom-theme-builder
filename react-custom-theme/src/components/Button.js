import React, { forwardRef } from 'react'

/**
 * Button Component.
 *
 */
const CustomButton = forwardRef(({ children, ...props }, ref) => {
  return (
    <button type="button" class="btn" {...props} ref={ref}>
      {children}
    </button>
  )
})

CustomButton.displayName = 'ReactFormElements(Button)'

export default CustomButton;
