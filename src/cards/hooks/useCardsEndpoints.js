import axios from "axios";
import { useCallback } from "react";
import { useEnv } from "../../environments/EnvironmentProvider";
import { generateCards } from "../_mock/cardsFixture";

const useCardsEndpoints = () => {
  const { apiUrl, isTest } = useEnv();

  const getCards = useCallback(async () => {
    if (isTest) return Promise.resolve(generateCards(6));

    const res = await axios.get(`${apiUrl}/cards`);
    return res.data;
  }, [apiUrl, isTest]);

  return {
    getCards,
  };
};

export default useCardsEndpoints;
