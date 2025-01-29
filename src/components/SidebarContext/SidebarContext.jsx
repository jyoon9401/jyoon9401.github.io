import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {

    const [closed, setClosed] = useState(false);

    return (
        <SidebarContext.Provider value={[closed, setClosed]}>
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebarContext() {
    return useContext(SidebarContext);
}