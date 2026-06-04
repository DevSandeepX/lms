import logo from "./images/logo.png";

import it from "./images/it.jpg";
import iot from "./images/iot.jpg";
import python from "./images/python.jpg";
import web from "./images/web.jpg";

import student from "./images/student.png";
import hero from "./images/hero.png";

import home from "./icons/home.svg";
import user from "./icons/user.svg";
import logout from "./icons/logout.svg";
import analytics from "./icons/analytics.svg";
import { Laptop, LayoutDashboard, Route, TrendingUp } from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Categories", href: "/categories" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export const ADMIN_LINKS = [
  { label: "Dashboard", href: "/admin/dashboard" },
  { label: "Analytics", href: "/admin/analytics" },
  { label: "Courses", href: "/admin/courses" },
];

export const USER_LINKS = [
  { label: "Dashboard", href: "/user/dashboard" },
  { label: "My Enrollments", href: "/user/enrollments" },
  { label: "Profile", href: "/user/profile" },
  { label: "Analytics", href: "/user/analytics" },
];

export const images = { iot, it, python, web, logo, student, hero };
export const icons = { home, user, logout, analytics };
export const features = [
  {
    id: 1,
    title: "Learn Anytime, Anywhere",
    description:
      "Access courses on any device and learn at your own pace without limitations.",
    icon: Laptop,
  },

  {
    id: 3,
    title: "Personal Learning Dashboard",
    description:
      "Keep all your enrolled courses, progress, and achievements in one place.",
    icon: LayoutDashboard,
  },
  {
    id: 4,
    title: "Progress & Performance Insights",
    description:
      "Track your learning journey with detailed progress reports and completion statistics.",
    icon: TrendingUp,
  },
];
