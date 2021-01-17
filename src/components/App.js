import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import Sidenav from "./Sidenav";
import Home from "./Home"
import MainPage from "./MainPage";
import ProjectDetails from "./ProjectDetails";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Sidenav />
                <Route path="/" exact component={MainPage}/>
                <Route path="/project/:id" exact component={ProjectDetails} />
            </BrowserRouter>
        </div>
    );
}

export default App;