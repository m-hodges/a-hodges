import React from "react";

type Props = {
  left: JSX.Element;
  right: JSX.Element;
};

function ContentDisplay({ left, right }: Props) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 h-auto md:h-screen-100 lg:h-screen-75">
      <div className="flex justify-center lg:justify-end h-full overflow-hidden">
        <div className="w-full max-w-lg">{left}</div>
      </div>
      <div className="flex justify-center lg:justify-start h-screen-75 lg:h-full overflow-hidden">
        <div className="w-full max-w-lg">{right}</div>
      </div>
    </section>
  );
}

export default ContentDisplay;
