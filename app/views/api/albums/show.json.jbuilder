
json.album do
    json.extract! @album, :id, :title, :album_cover, :artist_id, :genre, :created_at, :updated_at
    json.set! 'artist_name', @album.artist.name
    json.set! 'album_songs' do 
    ! json.array! @album.songs 
    end 
end 