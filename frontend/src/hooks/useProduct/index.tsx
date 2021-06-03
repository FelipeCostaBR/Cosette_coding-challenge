import { useEffect, useState } from 'react';
import api from '../../services/api';

interface Product {
    name: string;
    description: string;
    brand: string;
    price: string;
    images: [string];
    sku: string;
    qty: number;
}

interface URL {
    url: string;
}

export const useProduct = ({ url }: URL) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [httpStatusCode, setHttpStatusCode] = useState(0);
    const [httpErrorMessage, setHttpErrorMessage] = useState('');

    useEffect(() => {
        async function fetchData(): Promise<void> {
            try {
                const { data } = await api.get(url);
                setProducts(data.products);
            } catch (error) {
                if (error.message === `Network Error`) {
                    setHttpStatusCode(500);
                    setHttpErrorMessage('We are having problem with the server, please, try late !');
                }

                const statusCode = error.response.data.status;
                const errorMessage = error.response.data.data;

                setHttpStatusCode(statusCode);
                setHttpErrorMessage(errorMessage);
            }
        }
        fetchData();
    }, [url]);

    return {
        products,
        httpStatusCode,
        httpErrorMessage,
    };
};
