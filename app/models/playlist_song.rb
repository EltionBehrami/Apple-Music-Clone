class PlaylistSong < ApplicationRecord
    validates :playlist_id, :song_id, presence: true
    
    belongs_to :song 
    belongs_to :playlist 
end
