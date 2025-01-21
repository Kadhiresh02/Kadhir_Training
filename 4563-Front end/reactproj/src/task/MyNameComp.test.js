import { render,screen } from "@testing-library/react";
import MyNameComp from "./MyNameComp";

describe("MyName Component",()=>{
    test("render it",()=>{
        render(<MyNameComp/>);
        let createElement =screen.getByText(/My name is Kadhiresh/i);
        expect(createElement).toBeInTheDocument();
    })
    test("render with props name",()=>{
        render(<MyNameComp name ="Kadhiresh" post="Fullstack Developer"/>);
        let createElement =screen.getByText("My Name is :Kadhiresh");
        expect(createElement).toBeInTheDocument();
    })
    test("render with props post",()=>{
        render(<MyNameComp name ="Kadhiresh" post="Fullstack Developer"/>);
        let createElement =screen.getByText(/i am :Fullstack Developer/i);
        expect(createElement).toBeInTheDocument();
    })
})