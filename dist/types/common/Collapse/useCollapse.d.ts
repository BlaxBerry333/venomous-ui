export default function useCollapse(defaultIsCollapsed?: boolean): {
    isCollapsed: boolean;
    toggleCollapsed: () => void;
};
