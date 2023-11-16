json.song do
    json.extract! @song, :id, :title, :album_id, :artist_id, :created_at, :updated_at 
end   

