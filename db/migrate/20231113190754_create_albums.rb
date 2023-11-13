class CreateAlbums < ActiveRecord::Migration[7.0]
  def change
    create_table :albums do |t|
      t.string :title, null: false 
      t.bigint :artist_id, null: false
      t.timestamps
    end
    add_index :albums, :title
  end
end
