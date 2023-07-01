class User < ApplicationRecord
    has_many :items 
    has_many :reviews, through: :items 

    has_secure_password 

    validates :username, presence: true, uniqueness: true 
end
