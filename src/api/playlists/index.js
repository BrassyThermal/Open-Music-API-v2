const PlaylistHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'playlists',
  version: '1.0.0',
  register: async (server, {
    playlistService, playlistSongService, playlistActivity, PlaylistValidator,
  }) => {
    const playlistHandler = new PlaylistHandler(
      playlistService,
      playlistSongService,
      playlistActivity,
      PlaylistValidator,
    );
    server.route(routes(playlistHandler));
  },
};
