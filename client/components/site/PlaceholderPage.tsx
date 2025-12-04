import { PropsWithChildren } from "react";

export default function PlaceholderPage({
  title,
  children,
}: PropsWithChildren<{ title: string }>) {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-blue-50/30" />
      <div className="container py-24">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          {title}
        </h1>
        <p className="mt-3 text-foreground/70 max-w-2xl">
          This page is a placeholder. Tell me what content and sections you want
          here and I will build it next.
        </p>
        {children}
      </div>
    </div>
  );
}
