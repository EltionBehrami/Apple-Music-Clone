class Api::SongsController < ApplicationController
    wrap_parameters include: User.attribute_names + ['artistName'] 

    def index
        @songs = Song.all 
        render :index 
    end 

    def show 
        @song = Song.find[params[:id]]
        render :show 
    end 

    
end
