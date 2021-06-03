import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 80%;
    margin: 0 auto 0 auto;
    font-size: 2rem;

    h1 {
        margin: 2rem 2rem;
    }
`;

export const Card = styled.form`
    border: 1px solid black;
    border-radius: 0.25rem;
    margin-bottom: 5px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3rem;
`;

export const CardField = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 150px;
    }
`;

export const CardTextContent = styled.div`
    margin-left: 1rem;
    p:first-child {
        color: var(--text-title);
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1.2rem;
        width: max-content;
    }
`;

export const Button = styled.button`
    width: 15%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--blue);
    color: var(--shape);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1.3rem;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
    margin-top: auto;
`;
