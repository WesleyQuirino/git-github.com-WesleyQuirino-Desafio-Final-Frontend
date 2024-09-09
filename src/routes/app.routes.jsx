import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/home";
import { Dish } from "../pages/dish";
import { EditDish } from "../pages/editDish";
import { AddDish } from "../pages/addDish";

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dish/:id" element={<Dish />} />
            <Route path="/editDish/:id" element={<EditDish />} />
            <Route path="/addDish" element={<AddDish />} />
            <Route path="*" element={<Home />}/>
        </Routes>
    )
}