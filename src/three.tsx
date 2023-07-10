import React, { useState, useEffect, FunctionComponent } from 'react';

interface ChildProps {
    func: () => number;
}

const IrresponsableChild: FunctionComponent<ChildProps> = ({ func }) => {
    console.log("Child rendered");
    return <div>Result: {func()}</div>;
};

const IrresponsableParent: FunctionComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const func = () => {
        return Math.random();
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <IrresponsableChild func={func} />
        </div>
    );
};

export default IrresponsableParent;
