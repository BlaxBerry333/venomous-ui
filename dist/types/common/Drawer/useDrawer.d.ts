export default function useDrawer(): {
    isOpen: boolean;
    setIsOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    openDrawer: () => void;
    closeDrawer: () => void;
    toggleDrawer: () => void;
};
