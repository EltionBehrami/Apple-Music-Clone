
json.album do
    json.extract! @album, :id, :title, :artist_id, :created_at, :updated_at
end 