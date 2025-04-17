import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import { useEffect, useRef } from 'react';

export default function ThemeToggle() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);
    const buttonRef = useRef(null);

    const handleToggle = () => {
        if (buttonRef.current) {
            buttonRef.current.classList.add('animate');

            setTimeout(() => {
                buttonRef.current.classList.remove('animate');
            }, 500);
        }

        dispatch(toggleTheme());
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
    }, [theme]);

    return (
        <div>
            <button ref={buttonRef} onClick={handleToggle}>
                Chuyển sang {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </button>
        </div>
    );
}
