import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import request from "../Requests";

const home = () => {
  return (
    <>
      <Main />
      <Row title="Up Coming" fetchURL={request.requestUpcoming} />
      <Row title="Popular" fetchURL={request.requestPopular} />
      <Row title="Trending" fetchURL={request.requestTrending} />
      <Row title="Top Rated" fetchURL={request.requestTopRated} />
      <Row title="Horror" fetchURL={request.requestHorror} />
    </>
  );
};

export default home;
