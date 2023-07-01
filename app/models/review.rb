class Review < ApplicationRecord
  belongs_to :user_id
  belongs_to :item_id

  validates :title, presence: true 
  validates :body, presence: true 
end
