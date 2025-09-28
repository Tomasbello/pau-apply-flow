import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VacanciesList } from "./pages/VacanciesList";
import { VacancyDetail } from "./pages/VacancyDetail";
import { ApplicationForm } from "./pages/ApplicationForm";
import { ApplicationTracking } from "./pages/ApplicationTracking";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VacanciesList />} />
          <Route path="/vacante/:id" element={<VacancyDetail />} />
          <Route path="/postular/:id" element={<ApplicationForm />} />
          <Route path="/seguimiento" element={<ApplicationTracking />} />
          <Route path="/mis-postulaciones" element={<ApplicationTracking />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
