class Album < ApplicationRecord
    validates :title, :artist_id, presence: true
    
    has_many :songs 
    belongs_to :artist 

end
