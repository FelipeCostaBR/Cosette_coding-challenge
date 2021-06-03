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

    useEffect(() => {
        async function fetchData(): Promise<void> {
            const { data } = await api.get('/products');
            setProducts(data.products);
        }
        fetchData();
    }, [url]);

    return {
        products,
    };
};
