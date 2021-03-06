import React, { useEffect } from 'react';
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../provider/toast';
import { Container } from './styles';

interface ToastProps {
    message: ToastMessage;
    style: object;
}

const icons = {
    info: <FiInfo size={32} />,
    success: <FiCheckCircle size={32} />,
    error: <FiAlertCircle size={32} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
    const { removeToast } = useToast();

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(message.id);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [removeToast, message.id]);

    return (
        <Container type={message.type} hasDescription={!!message.description} style={style}>
            {icons[message.type || 'info']}
            <div>
                <strong>{message.title}</strong>
                {message.description && <p>{message.description}</p>}
            </div>
            <button type="button" onClick={() => removeToast(message.id)}>
                <FiXCircle size={32} />
            </button>
        </Container>
    );
};

export default Toast;
