
@songs.each do |song|
    json.set! song.id do 
        json.extract! song, :id, :title, :artist_id, :album__id, :created_at, :updated_at
    end 
end 