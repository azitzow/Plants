class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  # lsof -i tcp:9292
  # sudo kill -9 9608
  # https://stackoverflow.com/questions/52943330/vs-live-share-and-live-server
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
    User.where(username: params[:username], password: params[:password]).to_json(include: :user_plants)
  end

  get "/users" do
    content_type 'text/html'
    "There are #{User.all.length} registered users."
  end

  get "/users/:id" do
    User.find(params[:id]).to_json(include: :user_plants)
  end

  post "/users" do
    User.exists?(username: params[:username]) ? false : User.create(username: params[:username], password: params[:password]).to_json
  end

  post "/user_plants" do
    UserPlant.create(time_since_watered: Time.now.to_i, sunlight_exposure: 0, user_id: params[:user_id], plant_id: params[:plant_id]).to_json
  end

  patch "/user_plants/:id" do
    userplant = UserPlant.find(params[:id])
    if !params[:sunlight_exposure]
      userplant.update(time_since_watered: Time.now.to_i)
    else
      userplant.update(sunlight_exposure: params[:sunlight_exposure])
    end

    UserPlant.where(user_id: userplant.user_id).to_json
  end

  delete "/users/:id" do
    User.delete_by(id: params[:id])
    UserPlant.delete_by(user_id: params[:id])
    User.exists?(id: params[:id]).to_json
  end

  patch "/users/:id" do
    User.find(params[:id]).update(password: params[:password])
    User.find(params[:id]).to_json(include: :user_plants)
  end

end
