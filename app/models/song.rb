class Song < ApplicationRecord
    validates :title, :artist_id, presence: true 

    belongs_to :artist
    belongs_to :album 
    has_one_attached :mp3
end
