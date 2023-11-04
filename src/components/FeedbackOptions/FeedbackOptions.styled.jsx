import styled from 'styled-components';

export const FeedbackOptionsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const FeedbackBtn = styled.button`
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 5px;
  border: none;
  min-width: 75px;
  font-size: 18px;
  font-weight: bold;
  color: rgb(0, 0, 0, 0.7);
  background-color: rgb(187, 187, 187, 0.7);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: ${({ $value }) => {
      if ($value === 'good') {
        return 'rgb(0, 211, 0, 0.5)';
      } else if ($value === 'neutral') {
        return 'rgb(248, 248, 0, 0.7)';
      } else {
        return 'rgb(255, 99, 71, 0.7)';
      }
    }};
  }
`;
