import React, { useRef, useImperativeHandle, forwardRef} from 'react';

const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focusInput: () => {
            inputRef.current.focus();
        },
        clearInput: () => {
            inputRef.current.value = '';
        }
    }));

    return <input ref={inputRef} type="text" placeholder="type something..." />;
});

export default CustomInput;