@playlist_songs.each do |playlist_song|
    json.set! playlist_song.id do 
        json.extract! playlist_song,  :id, :playlist_id, :song_id, :created_at, :updated_at
    end 
end 

