import styled from "styled-components";

export const Container= styled.header`
    background: var(--blue);
`

export const Content= styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 1rem 1rem 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size: 1rem;
        color:#FFF;
        background: var(--red);
        border: 0;
        padding: 0 2rem;
        border-radius:0.25rem;
        height: 3rem;

        transition: filter 0.3s;

        &:hover{
            filter:brightness(0.7)
        }
    }
`