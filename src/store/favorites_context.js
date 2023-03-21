import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorites: [],
  total: 0,
  addFavorite: (item) => {},
  removeFavorite: (itemId) => {},
  itemIsFavorite: (itemId) => {},
});

export function FavoriteContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHundler(item) {
    setUserFavorites((prev) => prev.concat(item));
  }

  function removeFavoriteHundler(itemId) {
    setUserFavorites((prev) => prev.filter((i) => i.id !== itemId));
  }

  function itemIsFavorite(itemId) {
    return userFavorites.some((i) => i.id === itemId);
  }
  const context = {
    favorites: userFavorites,
    total: userFavorites.length,
    addFavorite: addFavoriteHundler,
    removeFavorite: removeFavoriteHundler,
    itemIsFavorite: itemIsFavorite,
  };
  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;
