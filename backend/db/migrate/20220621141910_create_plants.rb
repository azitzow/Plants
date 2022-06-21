class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :dec
      t.string :img
      t.integer :watering_interval
      t.integer :sunlight
    end
  end
end
