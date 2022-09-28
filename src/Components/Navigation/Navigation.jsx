import React from "react";
import request from "../Request/requests.js";
import "./navigation.css";
import * as mq from "../style/mediaQuries";
import styled from "styled-components/macro";
import useMediaQuery from "../style/useMediaQuery.jsx";

function Navigation({ setSelectedOption }) {
  const matches = useMediaQuery(`${mq.smForHook}`);

  return (
    <div
      css={`
        ${mq.sm} {
          // display: flex;
          // flex-direction: column;
          // gap: 1rem;
          // align-item: center;
        }
      `}
    >
      {matches ? (
        <div>Hello</div>
      ) : (
        <div className="navigation">
          <h2 onClick={() => setSelectedOption(request.fetchTrending)}>
            Trending
          </h2>
          <h2 onClick={() => setSelectedOption(request.fetchTopRated)}>
            Top Rated
          </h2>
          <h2 onClick={() => setSelectedOption(request.fetchActionMovies)}>
            Action
          </h2>

          <h2 onClick={() => setSelectedOption(request.fetchHorrorMovies)}>
            Horror
          </h2>
          <h2 onClick={() => setSelectedOption(request.fetchRomanceMovies)}>
            Romance
          </h2>

          <h2 onClick={() => setSelectedOption(request.fetchSciFi)}>Sci-fi</h2>
          <h2 onClick={() => setSelectedOption(request.fetchWestern)}>
            Westren
          </h2>
          <h2 onClick={() => setSelectedOption(request.fetchWestern)}>
            Animation
          </h2>
          <h2 onClick={() => setSelectedOption(request.fetchTV)}>TV Movie</h2>
        </div>
      )}
    </div>
  );
}

export default Navigation;
