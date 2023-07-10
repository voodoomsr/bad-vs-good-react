import React, { useState, useEffect, useCallback, FunctionComponent } from 'react';

interface ChildProps {
    func: () => number;
}

const ResponsableChild: React.FC<ChildProps> = React.memo(({ func }) => {
    console.log("Child rendered");
    return <div>Result: {func()}</div>;
});

const ResponsableParent: FunctionComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const func = useCallback(() => {
        return Math.random();
    }, []);

    return (
        <div>
            <h1>Count: {count}</h1>
            <ResponsableChild func={func} />
        </div>
    );
};


export default ResponsableParent;