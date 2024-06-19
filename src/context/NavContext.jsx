import { createContext, useState } from "react";

export const NavContext = createContext();

export default function NavProvider({ children }) {
  const [isActive, setIsActive] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 30) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  });

  return <NavContext.Provider value={isActive}>{children}</NavContext.Provider>;
}
