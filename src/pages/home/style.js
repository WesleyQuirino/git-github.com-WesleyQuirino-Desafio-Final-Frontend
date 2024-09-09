import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`
export const Main = styled.main`
    display: grid;
    padding: 5rem 2rem;

    @media (min-width: 768px) {
        padding: 5rem 8rem 8rem;
    }
`

export const Sumary = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 35% auto;
    align-items: center;
    padding: 2rem;
    
    color: var(--light-light-100);
    border-radius: .3rem;
    background-image: linear-gradient(var(--dark-dark-1000), var(--dark-dark-900), var(--dark-dark-800));
    
    >.home-img{
        & div{
            background-image: url('src/assets/home-background.png');
            background-size: cover;
            position: absolute;
            bottom: 0;
            left: -20px;
            min-width: 15rem;
            max-width: 45rem;
            height: 12rem;
        }
    }

    >.home-sub{
        font-family: 'Poppins', sans-serif;
        color: var(--light-light-300);
        & h2{
            font-size: 1.8rem;
            font-weight: 600;
        }
        & span{
            font-size: 1.2rem;
            font-weight: 400;
        }
    }
    
    @media (min-width: 768px) {
        grid-template-columns: 50% auto;
        height: 26rem;
        >.home-img{
            & div{
                background-image: url('src/assets/home-background-desktop.png');
                background-size: cover;
                background-repeat: no-repeat;
                background-position-x: left;
                background-position-y: bottom;
                bottom: -10px;
                left: -30px;
                width: 100%;
                height: 30rem;
            }
        }
        >.home-sub{
            & h2{
                font-size: 4rem;
            }
            & span{
                font-size: 2rem;
            }
        }
    }
    @media (min-width: 1200px) {
        grid-template-columns: 40% auto;
        height: 26rem;
        margin-top: 8rem;
        >.home-img{
            & div{
                background-image: url('src/assets/home-background-desktop.png');
                background-size: cover;
                background-repeat: no-repeat;
                background-position-x: left;
                background-position-y: bottom;
                bottom: -10px;
                left: -45px;
                width: 70rem;
                height: 35rem;
            }
        }
    }
`

export const Section = styled.section`
    display: grid;
    margin-top: 5rem;
    gap: 1rem;
    >h2{
        font-size: 1.8rem;
        font-weight: 400;
        color: var(--light-light-100);
    }
    >section::-webkit-scrollbar {
        height: 5px;
    }
    >section::-webkit-scrollbar-thumb {
        background: var(--tints-cake-100); 
        border-radius: 10px;
    }
    >section::-webkit-scrollbar-thumb:hover {
        background: var(--tints-cake-200);
    }
    >section::-webkit-scrollbar-track {
        background: var(--dark-dark-1000);
        border-radius: 10px;
    }
`
export const Dishes = styled.section`
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    scroll-snap-type: x proximity;
`