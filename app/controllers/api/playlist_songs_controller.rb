class Api::PlaylistSongsController < ApplicationController
    wrap_parameters include: Playlist.attribute_names + ['playlistId', 'songId']

    def index 
        @playlist_songs = PlaylistSong.all 
        render :index 
    end 

    def show
        @playlist_song = PlaylistSong.find(params[:id])
        render :show 
    end 

    def create
        @playlist_song = PlaylistSong.new(playlist_song_params)
        if @playlist.save 
            render :show 
        else 
            render json: @playlist_songs.errors.full_messages, status: 422
        end 
    end 

    def destroy 
    end 

    private 
    def playlist_song_params
        params.require(:playlist_songs).permit(:playlist_id, :song_id )
    end 


end
