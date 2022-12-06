class CreateDrivers < ActiveRecord::Migration[6.1]
  def change
    create_table :drivers do |t|
      t.string :name
      t.integer :age
      t.string :country
      t.string :username
      t.string :password_digest
      t.string :car
      t.string :bio

      t.timestamps
    end
  end
end
