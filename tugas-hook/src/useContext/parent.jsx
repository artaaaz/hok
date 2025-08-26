import react from "react";
import Grandchild from "./Child";

function Parent({ theme }) {
    return <Child theme={theme} />;
}

export default {Parent};