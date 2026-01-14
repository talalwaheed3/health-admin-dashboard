import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  UserCheck,
  Users,
  UserPlus,
  LogOut,
  Activity,
  Menu,
  X,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/attendance", icon: UserCheck, label: "Attendance" },
  { to: "/employees", icon: Users, label: "Employees" },
  { to: "/visitors", icon: UserPlus, label: "Visitors" },
];

export function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      {/* Mobile menu button */}
      <DashboardMenuButton isBtnOpen={isOpen} setIsBtnOpen={setIsOpen} />
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full w-64 bg-sidebar z-50 flex flex-col transition-transform duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{ background: "var(--gradient-sidebar)" }}
      >
        {/* Logo */}
        {/* <div className="flex justify-end">
          <DashboardMenuButton isBtnOpen={isOpen} setIsBtnOpen={setIsOpen} />
        </div> */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sidebar-primary flex items-center justify-center">
              <Activity className="w-6 h-6 text-sidebar-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-sidebar-foreground">
                HealthCare
              </h1>
              <p className="text-xs text-sidebar-foreground/60">
                Management System
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => cn("nav-item", isActive && "active")}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-sidebar-border">
          <button
            onClick={handleLogout}
            className="nav-item w-full text-destructive hover:bg-destructive/10 hover:text-destructive"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>

        {/* Demo badge */}
        <div className="p-4">
          <div className="px-3 py-2 bg-sidebar-accent rounded-lg text-center">
            <span className="text-xs text-sidebar-foreground/70">
              Demo Version
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}

function DashboardMenuButton({ isBtnOpen, setIsBtnOpen }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed top-4 left-4 z-50 lg:hidden"
      onClick={() => setIsBtnOpen(!isBtnOpen)}
    >
      {isBtnOpen ? (
        <X className="h-5 w-5 text-white" />
      ) : (
        <Menu className="h-5 w-5" />
      )}
    </Button>
  );
}
