class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body
  has_one :user_id
  has_one :item_id
end
