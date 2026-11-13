import { MapPin as Pin } from "lucide-react";
import { Link } from "react-router";

export default function Card({ id, category, name, price, distance, image }) {
  return (
    <Link
      to={`/product/${id}`}
      className="flex h-full w-full flex-col md:w-50 gap-2 rounded-lg border border-line bg-white p-2.5"
    >
      <img
        src={image}
        alt="sneaker"
        className="aspect-square w-full rounded-xl object-cover"
      />
      <p className="text-sm text-muted">{category}</p>
      <p className="line-clamp-2 font-medium leading-snug">{name}</p>
      <p className="text-lg font-semibold">${price}</p>
      <p className="mt-auto flex items-center gap-1.5 text-sm text-muted">
        <Pin className="size-4 fill-red-500 text-white" />
        {distance?.toLocaleString("id-ID")} meters away
      </p>
    </Link>
  );
}
