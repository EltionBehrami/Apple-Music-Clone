class CreateSongs < ActiveRecord::Migration[7.0]
  def change
    create_table :songs do |t|
      t.string :title, null: false 
      t.references :artist, foreign_key: true, null: false  
      t.references :album, foreign_key: true
      t.timestamps
    end

    add_index :songs, :title 
  end
end
