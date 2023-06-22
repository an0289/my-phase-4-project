class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.text :body
      t.references :user_id, null: false, foreign_key: true
      t.references :item_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
