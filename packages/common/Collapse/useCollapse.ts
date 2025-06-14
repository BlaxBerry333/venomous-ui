import { startTransition, useCallback, useEffect, useState } from 'react';

export default function useCollapse(defaultIsCollapsed: boolean = false) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(defaultIsCollapsed);
  const toggleCollapsed = useCallback(() => startTransition(() => setIsCollapsed((s) => !s)), []);

  useEffect(() => {
    setIsCollapsed(defaultIsCollapsed);
  }, [defaultIsCollapsed]);

  return {
    isCollapsed,
    toggleCollapsed,
  };
}
