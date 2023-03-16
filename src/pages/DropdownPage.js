import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
    const [selection, setSelection] = useState(null);

    const handleChange = (option) => {
        setSelection(option);
    }

    const options = [
        {label: "Red", value: "red"},
        {label: "Blue", value: "blue"},
        {label: "Green", value: "green"},
    ]
    


    return(
        <div className="flex">
            <Dropdown onChange={handleChange} value={selection} options={options}/>
        </div>
    );
};

export default DropdownPage;