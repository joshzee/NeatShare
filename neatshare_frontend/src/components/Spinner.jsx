import React from "react";
import * as Loader from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      {/* <Loader.Circles 
        color="#00BFFF"
        height={50}
        width={200}
        className="m-5"
      /> */}

      <Loader.ProgressBar
        height="80"
        width="200"
        ariaLabel="progress-bar-loading"
        wrapperClass="progress-bar-wrapper"
        borderColor="#F4442E"
        barColor="#51E5FF"
        className="m-5"
      />

      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
};

export default Spinner;
