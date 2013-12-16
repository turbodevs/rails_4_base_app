source 'http://rubygems.org'
ruby "2.0.0"

gem 'rails', '4.0.0'
gem 'devise'

# UI
gem 'sass-rails', '~> 4.0.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.0.0'
gem 'therubyracer', platforms: :ruby
gem 'less-rails-bootstrap'
gem 'jquery-rails'
gem 'jquery-ui-rails'
gem 'haml-rails'
gem "less-rails"

# Images
gem 'carrierwave'
gem 'rmagick', require: false

# Tools
gem 'kaminari'

# Cache and background jobs
gem 'redis-rails'
gem "resque"
gem 'resque-scheduler'
gem 'rufus-scheduler', '2.0.24'

# Server
gem 'heroku'
gem 'unicorn'
gem 'foreman'

# API
gem "active_model_serializers"
gem 'jbuilder', '~> 1.2'
gem 'rest-client'

# Errors detector
gem "airbrake"

# db population
gem 'faker'

group :development do
  gem 'mysql2'
  gem 'sqlite3'
  gem 'taps'

  # QA
  gem "rails-erd"
  gem 'rails_best_practices'
  gem "brakeman"
end

group :production do
  gem 'pg'
  gem 'rails_12factor'
end

group :test do
  gem 'rspec-rails'
  gem 'capybara'
  gem 'capybara-webkit'
  gem 'factory_girl_rails'
  gem 'cucumber-rails', :require => false
  gem 'database_cleaner'
  gem 'launchy'
end