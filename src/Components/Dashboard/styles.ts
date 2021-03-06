import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;
    
    table{
        width: 100%;
        border-spacing: 0 0.5rem;


        th{
            color: var(--text-title);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height:1.5rem;
        }

        td{
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

        button{
            padding: 12px 12px;
            margin: 1rem 2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            &.but1{
                background: var(--Goldenrod);
            
        }
            &.but2{
                background: var(--green);
        }
            &.but3{
                background: var(--red)
        }
        }


        }

    }

    

        
`