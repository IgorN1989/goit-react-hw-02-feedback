import { StatisticsContainer, StatisticsValue } from './Statistics.styled';

export const Statistics = ({
  stats: { good, neutral, bad },
  total,
  positivePercentage,
}) => (
  <StatisticsContainer>
    <StatisticsValue>
      Good: <span>{good}</span>
    </StatisticsValue>
    <StatisticsValue>
      Neutral: <span>{neutral}</span>
    </StatisticsValue>
    <StatisticsValue>
      Bad: <span>{bad}</span>
    </StatisticsValue>
    <StatisticsValue>
      Total: <span>{total}</span>
    </StatisticsValue>
    <StatisticsValue>
      Positive feedback: <span>{positivePercentage}%</span>
    </StatisticsValue>
  </StatisticsContainer>
);
