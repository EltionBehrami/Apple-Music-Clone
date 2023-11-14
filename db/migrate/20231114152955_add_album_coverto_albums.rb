class AddAlbumCovertoAlbums < ActiveRecord::Migration[7.0]
  def change
    add_column :albums, :album_cover, :string
  end
end
