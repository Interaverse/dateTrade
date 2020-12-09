import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";


const routes: Routes = [
    { path: "", redirectTo: "/nav", pathMatch: "full" },
    { path: "nav", loadChildren: () => import("./nav/nav.module").then(m => m.NavModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
