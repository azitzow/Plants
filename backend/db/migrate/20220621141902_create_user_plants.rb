class CreateUserPlants < ActiveRecord::Migration[6.1]
  def change
    create_table :user_plants do |t|
      t.timestamp :time_since_watered
      t.integer :sunlight_exposure
      t.integer :user_id
      t.integer :plant_id
    end
  end
end
