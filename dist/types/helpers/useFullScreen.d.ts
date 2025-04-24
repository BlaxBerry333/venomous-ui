export default function useFullScreen(): {
    isFullScreen: boolean;
    setIsFullScreen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    toggleFullScreen: () => void;
};
