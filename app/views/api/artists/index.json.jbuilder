@artists.each do |artist|
    json.set! artist.id do 
        json.extract! artist, :id, :name, :bio, :created_at, :updated_at 
    end 
end 