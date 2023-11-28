@playlists.each do |playlist| 
    json.set! playlist.id do 
        json.extract! playlist, :id, :user_id, :title, :created_at, :updated_at
        json.playlist_songs playlist.songs.pluck(:id)
    end 
end 