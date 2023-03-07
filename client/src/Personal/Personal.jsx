import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PersonalRow } from "../PersonalRow/PersonalRow";
import { setGames } from "../store/actions";

export function Personal() {
  const games = useSelector((store) => store.games);
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const getPersonalInfo = async (user) => {
    const response = await fetch(
      `http://localhost:4000/game/${user.userId}/personal`
    );

    const result = await response.json();

    console.log(result, "result from back++++++++++++");
    dispatch(setGames(result));
  };

  useEffect(() => {
    getPersonalInfo(user);
  }, []);

  return (
    <>
      <div>
        {games.map((game) => (
          <PersonalRow  game={game} />
        ))}
      </div>
    </>
  );
}
