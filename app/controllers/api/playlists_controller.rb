class Api::PlaylistsController < ApplicationController
    wrap_parameters include: Playlist.attribute_names + ['userId', 'title']

    def index 
        @playlists = Playlist.all
        render :index 
    end 

    def show 
        @playlist = Playlist.find(params[:id])
        render :show 
    end 


    def create 
        @playlist = Playlist.new(playlist_params)
        if @playlist.save 
            render :show 
        else 
            render json: @playlist.errors.full_messages, status: 422
        end 
    end 



    def update 
        @playlist = Playlist.find(params[:id])
        if @playlist.update
            render :show 
        else 
            render json: @playlist.errors.full_messages, status: 422
        end 
    end 

    def destroy 
    end 

    private 
    def playlist_params 
        params.require(:playlist).permit(:user_id, :title, :description)
    end 








end
