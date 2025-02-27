import React from 'react';
import { useHistory } from 'react-router-dom';

interface WidgetProps {
    label: string;
    redirectTo: string;
}

const Widget: React.FC<WidgetProps> = ({ label, redirectTo }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(redirectTo);
    };

    return (
        <button onClick={handleClick}>
            {label}
        </button>
    );
};

export default Widget;