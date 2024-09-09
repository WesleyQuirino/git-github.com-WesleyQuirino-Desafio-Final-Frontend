import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    color: var(--light-light-700);
    >h3{
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.6rem;
        >img{
            height: 2rem;
            color: var(--light-light-700);
        }
    }
    >span{
        font-size: 1.2rem;
        color: var(--light-light-100);
    }
`
export const Navigate = styled.nav`
    display: grid;
    grid-template-columns: 2rem auto 2rem;
    align-items: center;
    position: relative;

    height: 7rem;
    padding: 2.3rem 4rem;
    text-align: center;
    color: var(--light-light-100);
    background-color: var(--dark-dark-700);

    >h2{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        
        font-size: 2rem;
        font-weight: 500;
        color: var(--light-light-100);
        > span{
            font-size: 1.2rem;
            font-weight: 400;
            color: var(--tints-cake-200);
        }
        > svg{
            height: 2rem;
            fill: var(--tints-cake-100);
            color: var(--tints-cake-100);
        }
    }

    >div{
        display: none;
    }

    >.mobile{
        position: relative;
        img{
            height: 2rem;
        }
        span{
            display: grid;
            place-content: center;
            position: absolute;
            top: -12px;
            left: 12px;
            height: 2rem;
            width: 2rem;
            border-radius: 50%;
            background-color: var( --tints-tomato-100);
        }
    }
    >.desktop{
        display: none;
    }

    >:last-child{
        display: none;
    }

    @media (min-width: 768px) {
        grid-template-columns: 20rem auto 15rem 2rem;
        gap: 1rem;
        height: fit-content;

        >:first-child{
            display: none;
        }
        
        >div{
            display: flex;
        }
        
        >.mobile{
            display: none;
        }
        
        >.desktop{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            padding: 1.6rem;
            width: 100%;
            border-radius: .8rem;
            background-color: var( --tints-tomato-100);
            img{
                height: 2rem;
            }
            span{
                display: grid;
                place-content: center;
            }
            p{
                font-size: 1.4rem;
            }
        }
        >:last-child{
            display: flex;
            font-size: 3rem;
            >:hover{
                cursor: pointer;
            }
        }
    }
`
export const Search = styled.div`
    display: grid;
    position: absolute;
    z-index: 4;
    background-color: var(--dark-dark-400);
    width: 100%;
    color: var(--light-light-100);
    >a{
        padding: 0.8rem;
        font-size: 2.4rem;
        border-bottom: 1px solid var(--dark-dark-900);
    }
`