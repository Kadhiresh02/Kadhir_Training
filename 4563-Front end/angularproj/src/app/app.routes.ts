import { Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { LoginComponent } from './layout/login/login.component';
import { MypipesComponent } from './mypipes/mypipes.component';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';
import { AngformComponent } from './forms/angform/angform.component';
import { UtdfComponent } from './forms/utdf/utdf.component';
import { RtfComponent } from './forms/rtf/rtf.component';
import { MaindashboardComponent } from './layout/maindashboard/maindashboard.component';
import { ParentComponent } from './parent/parent.component';
import { ItemComponent } from './item/item.component';
import { ProductDashComponent } from './crud/product-dash/product-dash.component';
import { ProductEditComponent } from './crud/product-edit/product-edit.component';
import { ProductAddComponent } from './crud/product-add/product-add.component';

export const routes: Routes = [
    //2.default routing
    // {path:"",component:LoginComponent},

    //3.redirect routing
    { path: "", redirectTo: "login", pathMatch: "full" },

    //1.naming routing
    { path: "login", component: LoginComponent },
    {
        path: "maindashboard", component: MaindashboardComponent, children: [
            { path: "parent", component: ParentComponent },
            { path: "databinding", component: DatabindingComponent },
            {path:"item" , component:ItemComponent },
            //4.parameterized routing
            { path: "mypipe/:id", component: MypipesComponent },
            //5.
            {
                path: "angform", component: AngformComponent, children: [
                    { path: "utdf", component: UtdfComponent },
                    { path: "rtf", component: RtfComponent }
                ]
            },
            {path:"productdash",component:ProductDashComponent,children:[
                {path:"productedit",component:ProductEditComponent},
                {path:"productadd",component:ProductAddComponent}
            ]}
        ]
    },

    //6. wild card routing
    { path: "**", component: PagenotfoundComponent }

];
