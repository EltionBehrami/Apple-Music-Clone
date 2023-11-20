json.set! @song.id do
    json.extract! @song, :id, :title, :album_id, :artist_id, :created_at, :updated_at 
    json.songUrl song.mp3.attached? ? song.mp3.url : nil
end   

