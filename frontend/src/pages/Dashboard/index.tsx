import React, { FormEvent, useState } from 'react';

import { AppError } from '../../components/Error';
import { Loading } from '../../components/Loading';
import { ProductCarousel } from '../../components/ProductCarousel';

import { useProduct } from '../../hooks/useProduct';
import { useToast } from '../../provider/toast';
import api from '../../services/api';

import { Container, Card, CardField, CardTextContent, Button } from './styles';

export const Dashboard: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const { products, httpStatusCode, httpErrorMessage } = useProduct({ url: '/products' });
    const { addToast } = useToast();

    const handleExportShopify = async (e: FormEvent, index: number) => {
        e.preventDefault();
        const product = products[index];
        setLoading(true);

        try {
            const { data } = await api.post('/products/create', { product });
            if (data) {
                setLoading(false);
            }

            addToast({
                type: 'success',
                title: 'Successful!',
                description: data.message,
            });
        } catch (error) {
            setLoading(false);
            addToast({
                type: 'error',
                title: 'Error during export',
                description: 'Something wrong to export, try again!',
            });
        }
    };

    if (httpStatusCode && httpErrorMessage) {
        return <AppError code={httpStatusCode} message={httpErrorMessage} />;
    }

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
                    {loading ? <Loading /> : <Button type={'submit'}>EXPORT</Button>}
                </Card>
            ))}
        </Container>
    );
};
