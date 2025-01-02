'use client'

import React from 'react';
import Link from 'next/link';
import { sidebarLinks } from '@/constants'; // Make sure this file exists and is properly exported
import { cn } from '@/lib/utils'; // Ensure `cn` is defined and imported correctly
import { usePathname } from 'next/navigation';
import Image from 'next/image';
const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2 ">
          <img
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Expenza logo"
            className="w-6 h-6 max-xl:w-4 max-xl:h-4"
          />
          <h1 className="sidebar-logo">Expenza</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
            >
              <div className="relative size-6"> {/* Ensure parent has defined dimensions */}
                <Image
                 src={item.imgURL}
                 alt={item.label}
                 fill
                 className={cn({
                'brightness-[3] invert-0': isActive,
                 })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
