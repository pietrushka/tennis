import { Icons } from "@/components/icons";

export type NavConfig = typeof navConfig;

export const navConfig = {
  navLinks: [
    {
      icon: <Icons.home className="h-5 w-5" />,
      iconMobile: <Icons.home className="h-5 w-5" />,
      label: "Prediction",
      href: "/",
      pageTitle: "Prediction",
      navLocation: "top",
    },
  ],
};
