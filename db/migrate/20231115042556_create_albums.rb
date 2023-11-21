class CreateAlbums < ActiveRecord::Migration[7.0]
  def change
    create_table :albums do |t|
      t.string :title, null: false 
      t.references :artist, null: false, foreign_key: true 
      t.string :album_cover
      t.string :genre
      t.timestamps
    end
    add_index :albums, :title
  end
end
