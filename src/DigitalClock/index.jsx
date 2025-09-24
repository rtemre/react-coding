import React from "react";

function DigitalClock() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Digital Clock</h1>
      <h2>{time}</h2>
    </div>
  );
}

export default DigitalClock;
