Rails.application.routes.draw do
  # resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  namespace :api, defaults: { format: :json } do 
    resources :users, only: :create 
    resource :session, only: [:create, :destroy, :show]
    resources :albums, only: [:index, :show]
    resources :artists, only: [:index, :show]
  end 
end



