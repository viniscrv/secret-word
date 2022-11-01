import styled from "styled-components";

export const Container = styled.div`
    p {
        font-weight: 700;
    }
    h1 {
        font-size: 2.5em;
    }
    h3 {
        span {
            color: #7e22ce;
        }
    }
    .wordContainer {
        margin: 1.5em;
        padding: 1.5em;
        border: 5px solid #7e22ce;
        display: flex;
        .letter, .blank {
            font-size: 70px;
            line-height: 1.5em;
            border: 1px solid #fff;
            height: 100px;
            width: 100px;
            text-overflow: uppercase;
            background-color: #262626;
            font-weight: 700;
        }
    }
    .letterContainer {
        p {
            margin-bottom: 1.2em;
        }
        form {
            display: flex;
            align-items: center;
            justify-content: center;
            input {
                height: 50px;
                width: 50px;
                font-size: 2em;
                text-align: center;
                margin-right: 1em;
            }
        }
    }
`