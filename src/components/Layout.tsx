import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { User, Bell, LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser } from "@/context/UserContext";
import { toast } from "sonner";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const { user } = useUser();

  const handleNotifications = () => {
    toast.info("Próximamente", {
      description: "Sistema de notificaciones en desarrollo"
    });
  };

  const handleLogout = () => {
    toast.success("Sesión cerrada", {
      description: "Has cerrado sesión exitosamente"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border h-header shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full">
            {/* Logo - Clickeable */}
            <div 
              className="flex items-center space-x-4 cursor-pointer hover:opacity-80 transition-opacity" 
              onClick={() => navigate("/")}
            >
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
              <button 
                onClick={() => navigate("/")} 
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                Vacantes
              </button>
              <button 
                onClick={() => navigate("/seguimiento")} 
                className="text-muted-foreground hover:text-primary font-medium transition-colors"
              >
                Mis Postulaciones
              </button>
              <button 
                onClick={() => navigate("/perfil")} 
                className="text-muted-foreground hover:text-primary font-medium transition-colors"
              >
                Mi Perfil
              </button>
            </nav>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={handleNotifications}>
                <Bell className="w-4 h-4" />
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span className="hidden sm:inline">{user.firstName} {user.lastName}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem onClick={() => navigate("/perfil")}>
                    <User className="w-4 h-4 mr-2" />
                    Mi Perfil
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleNotifications}>
                    <Bell className="w-4 h-4 mr-2" />
                    Notificaciones
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive" onClick={handleLogout}>
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