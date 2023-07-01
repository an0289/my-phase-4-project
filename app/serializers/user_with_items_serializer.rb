class UserWithItemsSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url 
  has_many :items 
end
