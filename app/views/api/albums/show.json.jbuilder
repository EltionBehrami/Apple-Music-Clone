
json.album do
    json.extract! @album, :id, :title, :album_cover, :artist_id, :created_at, :updated_at
end 