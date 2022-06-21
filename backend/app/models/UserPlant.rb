class UserPlant < ActiveRecord::Base
  belongs_to :plants
  belongs_to :users
end