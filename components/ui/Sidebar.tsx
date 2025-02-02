'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface SidebarLink {
  label: string;
  route: string;
}

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section>
      <div>
        {sidebarLinks.map((link: SidebarLink) => {
          const isActive = pathname === link.route || pathname.startsWith(link.route);
          return (
            <Link
              key={link.label}
              href={link.route}
              className={cn('flex gap-4 items-center p-4 rounded-lg justify-start', { 'bg-blue-1': isActive })}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Sidebar;