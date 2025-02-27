import React from 'react';

interface SubPageProps {
    title: string;
    content: string;
}

const SubPage: React.FC<SubPageProps> = ({ title, content }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
};

export default SubPage;