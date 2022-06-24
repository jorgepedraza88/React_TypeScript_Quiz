import styled from "styled-components";

export const QuestionCardStyles = styled.div`
  max-width: 1100px;
  background-color: #0f172a;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1rem;
    color: white;
    font-size: 20px;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const BottomWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 18px;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct ? "#3f6212" : !correct && userClicked ? "#dc2626" : "#312e81"};
    border-radius: 5px;
    border: none;
    color: #fff;
  }
`;
