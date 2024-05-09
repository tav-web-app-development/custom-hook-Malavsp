import useTime from "../hooks/useTime";

const Clock = () => {
  const time = useTime();
  return <div>{time}</div>;
};

export default Clock;
