import { useState } from "react";

function App() {
    const [checkbox, setCheckbox] = useState<string | boolean>("checkbox");

    function handleClick() {
        setCheckbox((checkbox) => !checkbox);
    }

    return (
        <>
            <div
                className={checkbox ? "checkbox checked" : "checkbox"}
                onClick={handleClick}
            ></div>
        </>
    );
}

export default App;
