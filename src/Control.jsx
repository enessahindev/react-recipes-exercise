import { useState } from 'react';
import Slider from 'rc-slider';
import "rc-slider/assets/index.css";
import "./App.css";

export const Control = () => {
    const [value, setValue] = useState(20000);

    const handleChange = num => setValue(num);
        return (
            <div className='card'>
                <header>
                    <h2>Tahmini Peşinat</h2>
                    <h3>
                        <abbr>TRY</abbr>
                        {value.toLocaleString("en-US")}
                    </h3>
                </header>
                <Slider
                    step={25}
                    max={100000}
                    value={value}
                    onChange={handleChange}
                />
            </div>
        );
};