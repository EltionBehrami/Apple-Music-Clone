
json.album do
    json.extract! @album, :id, :title, :album_cover, :artist_id, :genre, :created_at, :updated_at
    json.set! 'artist_name', @album.artist.name
    json.set! 'album_songs' do 
        json.array! @album.songs.pluck(:id)
    end
end 




json.set! 'album_songs' do 
    @album.songs.each do |song| 
        json.set! song.id do 
            json.extract! song, :id, :title, :album_id, :artist_id, :created_at, :updated_at 
            json.songUrl song.mp3.attached? ? song.mp3.url : nil
        end 
    end 
end 
