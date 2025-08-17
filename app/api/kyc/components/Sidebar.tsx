"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileSpreadsheet, CreditCard, Receipt, FileText, Bell } from "lucide-react";
import { useState } from "react";

const nav = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Applications", href: "/applications", icon: FileSpreadsheet },
  { name: "Billing", href: "/billing", icon: CreditCard },
  { name: "Rate Card", href: "/rate-card", icon: Receipt },
  { name: "Agreement Copy", href: "/agreement", icon: FileText },
  { name: "Notices", href: "/notices", icon: Bell },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <aside className="md:w-64 w-full md:sticky top-0 z-30">
      <div className="md:hidden flex items-center justify-between p-3 border-b bg-white dark:bg-gray-900">
        <div className="font-semibold">KYC<span className="text-primary">Dash</span></div>
        <button onClick={() => setOpen(!open)} className="px-3 py-1 rounded-md border">Menu</button>
      </div>

      <div className={`bg-white dark:bg-gray-900 md:h-screen border-r md:block ${open ? "block" : "hidden"} md:pt-6`}>
        <div className="hidden md:flex items-center gap-2 px-4 pb-4">
          <div className="h-9 w-9 rounded-xl bg-gray-900 dark:bg-gray-100" />
          <span className="text-lg font-bold">KYC Dashboard</span>
        </div>
        <nav className="px-2 pb-6 space-y-1">
          {nav.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link key={item.name} href={item.href} className={`flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 ${active ? "bg-gray-100 dark:bg-gray-800 font-medium" : ""}`}>
                <Icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
