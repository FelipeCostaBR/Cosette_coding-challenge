import React from 'react';
import ReactLoading from 'react-loading';

export const Loading: React.FC = () => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 'auto',
            marginRight: '90px',
        }}
    >
        <ReactLoading type="spin" color="#1E90FF" height="50px" width="50px" />
    </div>
);
