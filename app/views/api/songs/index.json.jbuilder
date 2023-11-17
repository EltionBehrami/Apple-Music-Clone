
@songs.each do |song|
    json.set! song.id do 
        json.extract! song, :id, :title, :album_id, :artist_id, :created_at, :updated_at
        json.set! 'song_url', song.mp3.attached? ? song.mp3.url : nil
    end 
end 