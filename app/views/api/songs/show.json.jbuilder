json.song do
    json.extract! @song, :id, :title, :album_id, :artist_id, :song_url :created_at, :updated_at 
end   

