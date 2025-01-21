import { createBrowserRouter } from "react-router-dom";
import MyimagesComp from "../components/MyimagesComp";
import EventComp from "../components/EventComp";
import VirtualDOM from "../components/VirtualDOM";
import MyStateComp from "../components/MyStateComp";
import FuncComp from "../components/FuncComp";
import ReactHooksComp from "../Hooks/ReactHooksComp";
import UserStateHookComp from "../Hooks/UseStateHookComp";
import UserEffectHookComp from "../Hooks/UseEffectHookComp";
import MainDashboardComp from "../Layout/MainDashboardComp";
import LoginComp from "../Layout/LoginComp";
import MyFavColorComp from "../components/MyFavColorComp";
import FormValComp from "../components/FormValComp";
import ValidationTask from "../task/ValidationTask";
import ProductDashComp from "../CRUD/ProductDashComp";
import ProductAddComp from "../CRUD/ProductAddComp";
import ProductEditComp from "../CRUD/ProductEditComp";
import ProtectedRouting from "./ProtectedRouting";
import DataListComp from "../reduxCode/DataListComp";
import ProductEditComp2 from "../CRUD2/ProductEditComp";
import ProductAddComp2 from "../CRUD2/ProductAddComp";
 import ProductDashComp2 from  "../CRUD2/ProductDashComp";
const routing = createBrowserRouter([
    { path: "", element: <LoginComp /> },
    { path: "login", element: <LoginComp /> },
    {
        // path: "mainDashboard", element: <MainDashboardComp />, children: [
        path: "mainDashboard", element: <ProtectedRouting Component={MainDashboardComp} />, children: [
            { path: "images/:id", element: <MyimagesComp /> },
            { path: "mystate", element: <MyStateComp /> },
            { path: "datalist", element: <DataListComp /> },
            { path: "favcolor", element: <MyFavColorComp newColor="Yellow" /> },
            {
                path: "hooks", element: <ReactHooksComp />, children: [
                    { path: "useState", element: <UserStateHookComp /> },
                    { path: "useEffect", element: <UserEffectHookComp /> }
                ]
            },
            
            { path: "formval", element: <FormValComp /> },
            { path: "validation", element: <ValidationTask /> },
            { path: "productdash", element: <ProductDashComp /> },
            { path: "productadd", element: <ProductAddComp /> },
            { path: "productedit/:id", element: <ProductEditComp /> },
            { path: "productdash2", element: <ProductDashComp2/> },
            { path: "productadd2", element: <ProductAddComp2 /> },
            { path: "productedit2/:id", element: <ProductEditComp2 /> }

        ]
    },
    //2.default
    { path: "", element: <VirtualDOM /> },
    //3.parameterize routing
    { path: "images/:id", element: <MyimagesComp /> },
    //1.naming routing
    { path: "mystate", element: <MyStateComp /> },
    { path: "event", element: <EventComp /> },


    //4.child routing
    {
        path: "hooks", element: <ReactHooksComp />, children: [
            { path: "useState", element: <UserStateHookComp /> },
            { path: "useEffect", element: <UserEffectHookComp /> }
        ]
    },

    //5.wild-card
    { path: "*", element: <FuncComp /> },


]);

export default routing;