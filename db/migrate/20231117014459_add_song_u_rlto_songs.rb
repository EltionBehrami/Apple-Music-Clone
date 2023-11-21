class AddSongURltoSongs < ActiveRecord::Migration[7.0]
  def change
    add_column :songs, :song_url, :string, null: false
  end
end
