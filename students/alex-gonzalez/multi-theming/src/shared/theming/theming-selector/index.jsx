import { useContext } from "react";
import { ThemingContext } from "../theming.context";



function ThemingSelector(){
    const [theming,updateTheming] = useContext(ThemingContext);

    const changeTheme = e => {
        updateTheming(e.target.value);
    }

    return (
        <div onChange={changeTheme}>
            <label htmlFor="light">Light</label>
            <input id="light" name="theme" type='radio' value='L' defaultChecked={theming === 'L'}></input>
            <input id="dark" name="theme" type='radio' value='D' defaultChecked={theming === 'D'}></input>
            <label htmlFor="dark">Dark</label>
        </div>
    )
}


export default ThemingSelector;