import { Search, ShoppingCart, MessageSquareText, User } from "lucide-react";

const navActions = [
    {id: 'cart', label: 'Cart', href: '#', icon : ShoppingCart},
    {id: 'chat', label: 'Messages', href: '#', icon : MessageSquareText},
    {id: 'profile', label: 'User', href: '#', icon : User, highlight: true},
];

export default function Navbar(){
    return (
        <nav className="flex items-center justify-between gap-6 border-b border-line bg-white px-10 py-3.5 max-md:flex-wrap max-md:gap-3 max-md:px-4 max-md:py-3">
            <a href="#" className="text-xl font-bold italic text-brand">Tel Used</a>
            <div class="search-input" className="flex flex-1 items-center gap-2 rounded-full border border-[#999] px-3.5 py-1.5 max-md:order-3 max-md:basis-full">
                <Search className="size-4 text-muted" />
                <input type="search" name="search-bar" id="search-bar" className="flex-1 bg-transparent text-center text-[13px] outline-none"/>
            </div>
            <div class="more-nav" className="flex items-center gap-4.5">
                {navActions.map(({id,label,href,icon:Icon,highlight}) => (
                    <a
                    key={id}
                    href={href}
                    aria-label={label}
                    className={`flex items-center justify-center 
                        ${highlight ? 'size-9 rounded-full bg-brand text-white' : 'text-brand'}`}
                    ><Icon className="size-5.5" />
                    </a>
                ))}
            </div>
        </nav>
    )
}