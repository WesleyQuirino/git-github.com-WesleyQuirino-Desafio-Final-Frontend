import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    padding: 3rem;
    gap: 4rem;
    color: var(--light-light-300);
    >a{
        font-size: 2.4rem;
        display: flex;
        align-items: center;
        font-weight: 400;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem;
    gap: 4rem;
    color: var(--light-light-300);
    >.dishImage{
        & img{
            height: 24rem;
            width: 24rem;
        }
        text-align: center;
        width: 100%;
    }
    @media (min-width: 900px) {
        display: grid;
        grid-template-columns: 40% auto;
        >.dishImage{
            & img{
                height: 40rem;
                width: 40rem;
            }
        }
    }
`

export const ContentSeparator = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    >.dishText{
        padding: 0 4rem;
        text-align: center;
        & h2{
            margin-bottom: 2rem;
            font-size: 2.6rem;
            font-weight: 400;
        }
        & p{
            font-size: 1.6rem;
            font-weight: 400;
        }
    }
    >.dishTags{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        
        padding: 0 4rem;
        color: var(--light-light-100);
        & p{
            padding: 1rem;
            border-radius: .5rem;
            background-color: var(--dark-dark-1000);
            font-size: 1.6rem;
            font-weight: 400;
        }
    }
    >.dishController{
        display: flex;
        padding: 0 4rem;
        gap: 2rem;

        & .dishCounter{
            display: grid;
            align-items: center;
            text-align: center;
            width: 15rem;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 1rem;
            font-size: 2rem;
            font-weight: 500;
            color: var(--light-light-300);
            & button{
                justify-content: center;
                color: var(--light-light-100);
            }
        }

        & a{
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            width: 100%;
            font-size: 1rem;
            gap: .5rem;
            padding: 1rem 2rem;
            border-radius: .5rem;
            color: var(--light-light-100);
            background-color: var(--tints-tomato-100);
        }
    }
    @media (min-width: 900px) {
        >.dishText{
            text-align: left;
        }
            
        >.dishTags{
            justify-content: start;
            gap: 2rem;
        }
        >.dishController{
            & a{
                font-size: 2rem;
            }
        }
    }
`