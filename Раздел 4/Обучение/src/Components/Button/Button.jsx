import './button.css';

function Button() {
    const clicked = () => {
        console.log('Привет!');
    }

    return (
        <button 
            onClick={() => {clicked}}
            className='button accent'>
                Сохранить
        </button>
    )
};

export default Button;
