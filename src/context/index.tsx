import { ReactNode } from "react";
import { AuthProvider } from "./auth-context";

export const AppProviders=({children}:{children:ReactNode})=>{
    //整个项目在根节点上的 子组件

    return <AuthProvider>
        {children}
    </AuthProvider>

}