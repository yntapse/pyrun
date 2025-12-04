import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import MainLayout from "@/components/layout/MainLayout";

const queryClient = new QueryClient();

// Wake up the backend on app load (Render free tier sleeps after inactivity)
const wakeUpBackend = async () => {
  try {
    await fetch("https://pyrun-2.onrender.com/health", { method: "GET" });
    console.log("✅ Backend is awake and ready");
  } catch (err) {
    console.warn("⚠️ Backend wake-up failed, it may take longer for forms to work:", err);
  }
};

const App = () => {
  useEffect(() => {
    wakeUpBackend();
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Index />
              </MainLayout>
            }
          />
          <Route
            path="/product/:slug"
            element={
              <MainLayout>
                <ProductDetail />
              </MainLayout>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path="*"
            element={
              <MainLayout>
                <NotFound />
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
