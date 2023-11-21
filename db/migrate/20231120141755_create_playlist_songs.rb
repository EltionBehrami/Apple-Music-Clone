class CreatePlaylistSongs < ActiveRecord::Migration[7.0]
  def change
    create_table :playlist_songs do |t|
      t.references :playlist, foreign_key: true, null: false 
      t.references :song, foreign_key: true, null: false 
      t.timestamps
    end
  end
end
