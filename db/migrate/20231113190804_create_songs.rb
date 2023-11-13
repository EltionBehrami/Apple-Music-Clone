class CreateSongs < ActiveRecord::Migration[7.0]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.bigint :artist_id, null: false 
      t.bigint :album_id
      t.timestamps
    end

    add_index :songs, :title
  end
end
