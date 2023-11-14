
@albums.each do |album|
    json.set! album.id do 
        json.extract! album, :id, :title, :artist_id, :album_cover, :created_at, :updated_at
    end 
end 