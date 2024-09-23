import React from "react";
import MovieSearch from "./components/MovieSearch";
import GenreSearch from "./components/GenreSearch";

const App: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        position: "absolute",
        width: "100%",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Pesquisa de Filmes</h1>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <MovieSearch />
        <GenreSearch />
      </div>
    </div>
  );
};

export default App;
