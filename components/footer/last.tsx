import React from "react";

const Last = () => {
  const currentSongName = "R.E.M. Losing My Religion";
  return (
    <div className="last-fm">
      <div className="spinner">
        <span className="spinner-part-0"></span>
        <span className="spinner-part-1"></span>
        <span className="spinner-part-2"></span>
        <span className="spinner-part-3"></span>
        <span className="spinner-part-0"></span>
        <span className="spinner-part-1"></span>
        <span className="spinner-part-2"></span>
        <span className="spinner-part-3"></span>
      </div>
      <div>
        <span className="text-xs text-slate-500">
          <a
            href={`https://www.youtube.com/results?search_query=${currentSongName}`}
          >
            {currentSongName}
          </a>
        </span>
      </div>
    </div>
  );
};

export default Last;
