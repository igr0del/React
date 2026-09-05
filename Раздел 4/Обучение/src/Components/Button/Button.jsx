import './button.css';
import { useState } from 'react';

function Button() {
    // let text = 'Сохранить';
    const [text, setText] = useState('Сохранить');

    const clicked = () => {
        // text = 'Закрыть';
        setText('Закрыть');
        console.log('Привет!');
        // console.log(text);
    }

    return (
        <button 
            onClick={() => {clicked}}
            className='button accent'>
                (text)
        </button>
    )
};

export default Button;
