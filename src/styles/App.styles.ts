import styled, { createGlobalStyle } from "styled-components";
import background from "./../images/background.jpg";

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
  overflow-x: hidden;
}
body {
  background-image: url(${background});
  background-size: cover;
  margin: 0;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  max-width: 100%;
}
* {
  box-sizing: border-box;
  font-family: "Catamaran", sans-serif;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Fascine Inline, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    color: white;
    font-size: 70px;
    font-weight: 700;
    text-align: center;
    margin: 20px;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 50px;
    }
    .score {
      font-size: 1.2rem;
    }
  }
  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(90deg, #8b5cf6, #5b21b6);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    color: white;
    font-weight: 700;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    transition: all;
  }

  .next:hover,
  .start:hover {
    background: #5b21b6;
  }
  .start {
    max-width: 200px;
  }
`;
