import React, { useRef, useLayourtEffect, useState } from 'react';

function BoxSizeChecker() {
    const boxRef = useRef(null);
    const [boxWidth, setBoxWidth] = useState(0);

    //useLayourEffect di panggil sebelum browser menampilkan perubahan
    useLayoutEffect(() => {
        const width = boxRef.current.offsetWidth;
        setBoxwidth(width);
    }, []);


    return (
        <div style={{ textAlign: 'center'}}>
            <div 
            ref={boxRef}
            style={{
                width: '300px',
                height: '100px',
                backgroundColor: 'skyblue',
                margin: 'auto'
            }}>
                Kotak ini lebarnya {boxWidth}px

            </div>
        </div>
    );

}

export default BoxSizeChecker;