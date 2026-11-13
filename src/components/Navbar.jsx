import {
  Search,
  ShoppingCart,
  MessageSquareText,
  User,
  Menu,
  X,
  Home
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const navActions = [
  { id: "cart", label: "Cart", to: "/cart", icon: ShoppingCart },
  { id: "chat", label: "Messages", to: "/chat", icon: MessageSquareText },
  { id: "profile", label: "User", to: "/profile", icon: User, highlight: true },
];

const asideNavActions = [
  { id: "home", label: "Home", to: "/", icon: Home },
  { id: "cart", label: "Cart", to: "/cart", icon: ShoppingCart },
  { id: "chat", label: "Messages", to: "/chat", icon: MessageSquareText },
  { id: "profile", label: "User", to: "/profile", icon: User, highlight: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <nav className="flex items-center justify-between gap-6 border-b border-line bg-white px-10 py-3.5 max-md:flex-wrap max-md:gap-3 max-md:px-4 max-md:py-3">
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      ></div>
      <aside
        inert={!open}
        className={`fixed inset-y-0 right-0 z-50 flex w-64 flex-col gap-2 bg-white p-5 shadow-xl
        transition-transform duration-300 md:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close menu"
          className="self-end text-brand"
        >
          <X className="size-6" />
        </button>

        {asideNavActions.map(({ id, label, to, icon: Icon }) => (
          <Link
            key={id}
            to={to}
            onClick={close}
            className="flex items-center gap-3 rounded-lg px-3 py-3 text-brand hover:bg-gray-100"
          >
            <Icon className="size-5.5" />
            {label}
          </Link>
        ))}
      </aside>
      <Link to={"/"} className="text-3xl font-bold italic text-brand">
        Tel Used
      </Link>
      <div className="flex flex-1 items-center gap-2 rounded-full border border-[#999] px-3.5 py-1.5 max-md:order-3 max-md:basis-full">
        <Search className="size-4 text-muted" />
        <input
          type="search"
          name="search-bar"
          id="search-bar"
          className="flex-1 bg-transparent text-[13px] outline-none"
        />
      </div>
      <div className="hidden md:flex items-center gap-4.5">
        {navActions.map(({ id, label, to, icon: Icon, highlight }) => (
          <Link
            key={id}
            to={to}
            aria-label={label}
            className={`flex items-center justify-center
                        ${highlight ? "size-9 rounded-full bg-brand text-white" : "text-brand"}`}
          >
            <Icon className="size-5.5" />
          </Link>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="text-brand md:hidden"
      >
        <Menu className="size-6" />
      </button>
    </nav>
  );
}
