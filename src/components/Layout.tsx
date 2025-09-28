import { ReactNode } from "react";
import { User, Bell, LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border h-header shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">P</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">PAU</h1>
                <p className="text-xs text-muted-foreground">Plataforma de Ayudantías</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-foreground hover:text-primary font-medium transition-colors">
                Vacantes
              </a>
              <a href="/mis-postulaciones" className="text-muted-foreground hover:text-primary font-medium transition-colors">
                Mis Postulaciones
              </a>
              <a href="/perfil" className="text-muted-foreground hover:text-primary font-medium transition-colors">
                Mi Perfil
              </a>
            </nav>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span className="hidden sm:inline">Juan Pérez</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <User className="w-4 h-4 mr-2" />
                    Mi Perfil
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell className="w-4 h-4 mr-2" />
                    Notificaciones
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    <LogOut className="w-4 h-4 mr-2" />
                    Cerrar Sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};