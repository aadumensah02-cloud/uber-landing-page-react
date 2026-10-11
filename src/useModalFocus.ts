/**
 * Manages keyboard focus for a modal dialog
 * 
 * while `isOpen` is true, it:
 * - moves focus to the dialog
 * - closes the modal when you press the Esc button
 * -kepps Tab/ Shift + Tab cycling inside the dialog until you close the dialog
 * when you close the modal, focus returns to the button that opened it on the main page
 * 
 * 
 * Usage:
 * const dialogRef = useModalFocus(isOpen, onClose);
 * <div ref={dialogRef} role="dialog" tableIndex={-1}>
 */










import { useEffect, useRef } from "react";

export function useModalFocus(isOpen: boolean, onClose: () => void) {
    const dialogRef = useRef<HTMLDivElement>(null);
    // keeps the latest onClose without re-running the focus effect on every render
    const onCloseRef = useRef(onClose);

    // always call the latest onClose without re-running the focus effect
    useEffect(() => {
        onCloseRef.current = onClose;
    });

    useEffect(() => {
        if (!isOpen) return;

        // Remember the trigger button so focus can return to that button when the dialog is closed
        const previouslyFocused = document.activeElement as HTMLElement | null;
        dialogRef.current?.focus(); // move focus into the modal

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onCloseRef.current();
                return;
            }
            // Wrap focus: Tab on the last element goes to the first, and Shift+Tab does the reverse
            if (e.key !== "Tab") return;

            const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            if (!focusable || focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            const active = document.activeElement;

            if (e.shiftKey && (active === first || active === dialogRef.current)) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && active === last) {
                e.preventDefault();
                first.focus();
            }
        };

        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            previouslyFocused?.focus(); // return focus to the button that opened it
        };
    }, [isOpen]);

    return dialogRef;
}
