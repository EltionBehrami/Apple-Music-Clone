
json.artist do 
    json.extract! @artists, :id, :name, :bio, :created_at, :updated_at 
end 