import { PropsWithChildren } from "react";
import { Header } from "../site/Header";
import { Footer } from "../site/Footer";

function BackgroundFX() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://cdn.builder.io/api/v1/image/assets%2Ffef483de79874379b17b5a8f11228bfc%2F1206c257e76946cf8ac8ee711d472761?format=webp&width=1400')",
      }}
    >
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      <div className="absolute inset-0 pattern-circuit opacity-[0.04] mix-blend-soft-light" />
      <div className="absolute inset-0 noise opacity-[0.15]" />
    </div>
  );
}

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundFX />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
