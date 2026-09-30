'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [entering, setEntering] = useState(true);

  useEffect(() => {
    setEntering(true);
    const timer = window.setTimeout(() => setEntering(false), 520);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  // Next Link owns navigation, prefetching, history and scroll restoration.
  // The curtain never waits for images or prevents navigation.
  return (
    <div className="route-transition-shell" data-route-phase={entering ? 'entering' : 'idle'}>
      <div key={pathname} className="route-transition-curtain" aria-hidden="true" />
      {children}
    </div>
  );
}
