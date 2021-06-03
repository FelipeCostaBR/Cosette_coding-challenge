import React, { FormEvent } from 'react';
import { ProductCarousel } from '../../components/ProductCarousel';
import { useProduct } from '../../hooks/useProduct';

import api from '../../services/api';

import { Container, Card, CardField, CardTextContent, Button } from './styles';

export const Dashboard: React.FC = () => {
    const { products } = useProduct({ url: '/products' });

    const handleExportShopify = async (e: FormEvent, index: number) => {
        e.preventDefault();
        const product = products[index];
        const { data } = await api.post('/products/create', { product });
        console.log(data);
    };

    return (
        <Container>
            <h1>Products</h1>
            {products.map((product, index: number) => (
                <Card key={index} onSubmit={e => handleExportShopify(e, index)}>
                    <CardField>
                        <ProductCarousel images={product.images} />

                        <CardTextContent>
                            <p>{product.name}</p>
                            <p>{product.brand}</p>
                            <p>${product.price}</p>
                            <p>Quantity: {product.qty}</p>
                        </CardTextContent>
                    </CardField>

                    <Button type={'submit'}>EXPORT</Button>
                </Card>
            ))}
        </Container>
    );
};
