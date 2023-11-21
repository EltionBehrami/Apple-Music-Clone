json.extract! @playlist, :id, :title, :description, :created_at, :updated_at
json.playlist_songs @playlist.songs.pluck(:id)
