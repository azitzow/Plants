class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/plants" do
    Plant.all.to_json
  end

  get "/plants/:id" do
    Plant.find(params[:id])
  end

  post "/plants" do
    Plant.create(name: params[:name], dec: params[:dec], img: params[:img], watering_interval: params[:watering_interval], sunlight: params[:sunlight]).to_json
  end

  get "/user_plants/:id" do
    User.find(params[:id]).user_plants.to_json
  end

  get "/users/:username/:password" do
    User.where(username: params[:username], password: params[:password]).to_json
  end

  get "/users" do
    content_type 'text/html'
    "There are #{User.all.length} registered users."
  end

  post "/users" do
    User.exists?(username: params[:username]) ? false : User.create(username: params[:username], password: params[:password]).to_json
  end

end
