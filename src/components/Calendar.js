//url="https://calendly.com/trtincher12/bicycle-repair"

import React from "react";
import { InlineWidget } from "react-calendly";

const styles = {
  height: "1000px",
};

const pageSettings = {
  backgroundColor: "ffffff",
  hideEventTypeDetails: false,
  hideLandingPageDetails: false,
  primaryColor: "00a2ff",
  textColor: "4d5055",
};

function Calendly({ input }) {
  const prefill = {
    name: input.name,
    email: input.email,
    customAnswers: {
      a1: 1 + input.phoneNumber,
      a2: `${input.address1}, ${input.city}, ${input.state} ${input.zip} \n ${input.address2}`,
      a3: input.plan,
    },
  };

  return (
    <div>
      <h1>Book an Appointment!</h1>
      <InlineWidget
        url="https://calendly.com/trtincher12/bicycle-repair"
        styles={styles}
        pageSettings={pageSettings}
        prefill={prefill}
      />
    </div>
  );
}

export default Calendly;
