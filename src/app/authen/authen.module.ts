import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { authenRoutes } from "./authen.routes";
import { LoginComponent } from "./login/login.component";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(authenRoutes) 
    ],
    exports: []
})
export class AuthenModule {}