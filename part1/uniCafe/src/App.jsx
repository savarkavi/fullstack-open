/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ goodCount, badCount, neutralCount }) => {
  let total = goodCount + badCount + neutralCount;

  if (total === 0) return <p>No feedback given</p>;

  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={goodCount} />
        <StatisticsLine text="neutral" value={neutralCount} />
        <StatisticsLine text="bad" value={badCount} />
        <StatisticsLine text="total" value={total} />
        <StatisticsLine text="average" value={(goodCount - badCount) / total} />
        <StatisticsLine text="positive" value={(goodCount / total) * 100} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [goodCount, setGoodCount] = useState(0);
  const [badCount, setBadCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);

  const handleGoodCount = () => {
    setGoodCount(goodCount + 1);
  };

  const handleBadCount = () => {
    setBadCount(badCount + 1);
  };

  const handleNeutralCount = () => {
    setNeutralCount(neutralCount + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodCount} text="good" />
      <Button handleClick={handleNeutralCount} text="neutral" />
      <Button handleClick={handleBadCount} text="bad" />
      <h1>Statistics</h1>
      <Statistics
        goodCount={goodCount}
        badCount={badCount}
        neutralCount={neutralCount}
      />
    </div>
  );
};

export default App;
