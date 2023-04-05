import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
    justify-content: center;
`;

export const Form = styled.form`
    font-family: 'Roboto Slab';
    font-style: normal;
    padding: 0 13.6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > h2 {
        margin-bottom: 2.9rem;
        color: ${({ theme }) => theme.COLORS.BLUE_300};
    }

    >p {
        margin-top: 6.2rem;
    }

    >p, a {
        font-size: 1.6rem;
        line-height: 2.1rem;
        color: ${({ theme }) => theme.COLORS.BLUE_100};
    }

    >a {
        text-decoration: none;
        font-weight: bold;
    }
`;

export const Background = styled.div`
    display: flex;
    align-items: center;

    >img {
        max-width: 100%;
        min-width: 45rem;
        padding: 0 13.6rem 0 5rem;
    }
`;