class Song < ApplicationRecord
    validates :title, :artist_id, :song_url, presence: true 

    belongs_to :artist
    belongs_to :album 
end
