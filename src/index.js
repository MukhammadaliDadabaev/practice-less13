import ReactDOM from "react-dom";
import React from "react";

const Card = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.src} alt="Movies" />
      <p>{props.produced}</p>
      <p>{props.liked}</p>
    </div>
  );
};

ReactDOM.render(
  <div>
    <h1>Modern best Movies 🧐</h1>

    <div className="cards">
    <Card
      name="Jon Favreau"
      src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2009%2F02%2Firon-man-downey-jon_l_0.jpg"
      produced="February 18, 2009 at 09:00 PM EST"
      liked="90% ❤"
    />
    <Card
      name="Back to the Future Part"
      src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2015%2F10%2Freversal-of-fortune.jpg"
      produced="February 18, 2001 at 09:00 PM EST"
      liked="70% ❤"
    />
    <Card
      name="Bone Tomahawk"
      src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F03%2Fbest-western-gallery-dancewithwolves_0_0.jpg"
      produced="February 17, 2008 at 02:00 PM EST"
      liked="30% ❤"
    />
    </div>
  </div>,
  document.getElementById("root")
);
