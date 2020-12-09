import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular/common";

import { NavRoutingModule } from "./nav-routing.module";
import { NavComponent } from "./nav.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NavRoutingModule,
    ],
    declarations: [
        NavComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NavModule { }
