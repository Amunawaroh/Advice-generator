import { render } from "react-dom";
import Generator from "./Generator";

const App = () => {
    return (
        <Generator/>
    );
};

render (<App/>, document.getElementById("root")) ;