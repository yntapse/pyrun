import { Link } from "react-router-dom";

const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2Ffef483de79874379b17b5a8f11228bfc%2F2c0f175112574a688331f4867144b1a6?format=webp&width=64";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-2 ${className} transform transition-transform duration-200 hover:scale-105`}
      aria-label="Pyrun AI Home"
    >
      <div className="flex items-center gap-2">
        <img src={LOGO_URL} alt="Pyrun AI" className="h-9 w-9 rounded" />
        <div className="flex flex-col">
          <span className="text-lg font-bold tracking-tight text-gray-900">
            Pyrun<span className="text-emerald-500">Ai</span>
          </span>
          <span className="text-xs text-gray-500 font-medium">
            Smart Services Balanced Lives
          </span>
        </div>
      </div>
    </Link>
  );
}
