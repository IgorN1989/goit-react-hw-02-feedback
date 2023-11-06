import {
  FeedbackOptionsContainer,
  FeedbackBtn,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => (
  <FeedbackOptionsContainer>
    <FeedbackBtn $value="good" onClick={() => onLeaveFeedback('good')}>
      Good
    </FeedbackBtn>
    <FeedbackBtn $value="neutral" onClick={() => onLeaveFeedback('neutral')}>
      Neutral
    </FeedbackBtn>
    <FeedbackBtn $value="bad" onClick={() => onLeaveFeedback('bad')}>
      Bad
    </FeedbackBtn>
  </FeedbackOptionsContainer>
);
