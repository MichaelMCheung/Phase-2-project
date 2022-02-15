import React, { useEffect, useState } from 'react';

import { getFavorites } from '../utils';

import Playlist from './Playlist';

function Favorites() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const data = await getFavorites();

      setPlaylists(data);
    };

    loadFavorites();
  }, []);

  return (
    <div>
      {playlists.length > 0 ? (
        playlists.map((playlist) => (
          <Playlist key={playlist.id} playlist={playlist} />
        ))
      ) : (
        <h2>You have no favorites. Go add some!</h2>
      )}
    </div>
  );
}

export default Favorites;
