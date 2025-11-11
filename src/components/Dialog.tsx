import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<dialog>` element.
 *
 * @remarks
 * Dialog box or modal.
 *
 * - Use open attribute or showModal() method
 * - Provides built-in modal behavior
 * - Can be styled as modal or non-modal
 *
 * **Pro Tips:**
 * - Use showModal() for modal behavior
 * - Include close button
 *
 * @example
 * ```tsx
 * <Dialog open><P>Dialog content</P><Button>Close</Button></Dialog>
 *
 * <Dialog ref={dialogRef}>Modal content</Dialog>
 * ```
 */
export const Dialog = React.forwardRef<
  HTMLDialogElement,
  JSX.IntrinsicElements['dialog']
>((props, ref) => {
  return <dialog ref={ref} {...props} />;
});

Dialog.displayName = 'Dialog';
