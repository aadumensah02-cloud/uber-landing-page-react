import React, { useId } from "react";
import { createPortal } from "react-dom";
import type { Service } from "../ServiceOptions";
import { useModalFocus } from "../../useModalFocus";
import "../../styles/modal-styles/service-modal.css";
// import "../../styles/modal-styles/globalmodal.css";

interface ServiceModalProps {
    service: Service | null;   // null = closed
    onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
    const titleId = useId();
    const dialogRef = useModalFocus(Boolean(service), onClose);
    if (!service) return null;
    

    return createPortal(
        <div className="overlay" onClick={onClose}>
            <div
                ref={dialogRef}
                className="service-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                tabIndex={-1}
                onClick={(e) => e.stopPropagation()}>
                <button className="service-close-btn" onClick={onClose}>&times;</button>
                <img src={service.icon} alt="" style={{ width: 120 }} />
                <h2 id={titleId}>{service.title}</h2>
                <p>{service.description}</p>
                <p className="service-details">{service.details}</p>
                <button className="service-modal-button">{service.buttonText}</button>
            </div>
            
        </div>,
        document.body
    );
};


// const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
//   const titleId = useId();
//   const dialogRef = useRef<HTMLDivElement>(null);
//   const onCloseRef = useRef(onClose);
//   const isOpen = Boolean(service);

//   // keep the latest onClose without re-running the focus effect
//   useEffect(() => {
//     onCloseRef.current = onClose;
//   });

//   useEffect(() => {
//     if (!isOpen) return;

//     const previouslyFocused = document.activeElement as HTMLElement | null;
//     dialogRef.current?.focus(); // move focus into the modal

//     const onKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         onCloseRef.current();
//         return;
//       }
//       if (e.key !== "Tab") return;

//       // simple focus trap
//       const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
//         'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
//       );
//       if (!focusable || focusable.length === 0) return;
//       const first = focusable[0];
//       const last = focusable[focusable.length - 1];
//       const active = document.activeElement;

//       if (e.shiftKey && (active === first || active === dialogRef.current)) {
//         e.preventDefault();
//         last.focus();
//       } else if (!e.shiftKey && active === last) {
//         e.preventDefault();
//         first.focus();
//       }
//     };

//     document.addEventListener("keydown", onKeyDown);
//     return () => {
//       document.removeEventListener("keydown", onKeyDown);
//       previouslyFocused?.focus(); // give focus back to "Details"
//     };
//   }, [isOpen]);

//   if (!service) return null; // must come AFTER all hooks

//   return createPortal(
//     <div className="overlay" onClick={onClose}>
//       <div
//         ref={dialogRef}
//         className="modal"
//         role="dialog"
//         aria-modal="true"
//         aria-labelledby={titleId}
//         tabIndex={-1}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button type="button" className="close-btn" onClick={onClose} aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//         <img src={service.icon} alt="" style={{ width: 120 }} />
//         <h2 id={titleId}>{service.title}</h2>
//         <p>{service.description}</p>
//         <p className="service-details">{service.details}</p>
//         <button type="button" className="service-modal-button">
//           {service.buttonText}
//         </button>
//       </div>
//     </div>,
//     document.body
//   );
// };




export default ServiceModal;