import { useState } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

function Calendly() {

  const [loading, setLoading] = useState(true);

  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => setLoading(false),
    onEventScheduled: (e) => console.log(e.data.payload),
  });

  const bg = {
    backgroundColor: "#2C2729",
    backgroundImage: "none",
    height: "100vh",
  };

  return (
    <div style={bg} className="calendar">
      {loading && <h2 style={{color: "white"}}>Loading...</h2>}
      <InlineWidget
        // styles={{
        //   height: "700px", width: "1500px"
        // }}
        url="https://calendly.com/megmeyers/tutoring"
      />
    </div>
  );
}
export default Calendly;
