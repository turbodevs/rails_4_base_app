## Rails 4 (Ruby 2.0.0) base application sceleton

### Features

* Twitter Bootstrap 3 (http://getbootstrap.com/) + HAML + Coffee Script layout
* Devise authentication (https://github.com/plataformatec/devise)

### Included gems

#### Images:

  * `carrierwave` - Classier solution for file uploads for Rails, Sinatra and other Ruby web frameworks (https://github.com/carrierwaveuploader/carrierwave)

#### Tools

  * `kaminari` - A Scope & Engine based, clean, powerful, customizable and sophisticated paginator for Rails (https://github.com/amatsuda/kaminari)

#### Servers support

  * `heroku` - Cloud server (http://heroku.com/)
  * `unicorn` - Unicorn: Rack HTTP server for fast clients and Unix (https://github.com/defunkt/unicorn)
  * `foreman` - Manage Procfile-based applications (http://ddollar.github.com/foreman)

#### Rest API:

  * `active_model_serializers` - ActiveModel::Serializer implementation and Rails hooks (https://github.com/rails-api/active_model_serializers)
  * `jbuilder` - Create JSON structures via a Builder-style DSL (https://github.com/rails/jbuilder)
  * `rest-client` - Simple HTTP and REST client for Ruby, inspired by microframework syntax for specifying actions (https://github.com/rest-client/rest-client)

#### Background jobs

  * `resque` - Resque is a Redis-backed Ruby library for creating background jobs, placing them on multiple queues, and processing them later (https://github.com/resque/resque)
  * `resque-scheduler` - A light-weight job scheduling system built on top of resque (https://github.com/resque/resque-scheduler)

#### Code quality, security audit and errors handling:  

  * `rails-erd` - Generate Entity-Relationship Diagrams for Rails applications (https://github.com/voormedia/rails-erd)
  * `rails_best_practices` - A code metric tool for rails projects (https://github.com/railsbp/rails_best_practices)
  * `brakeman` - A static analysis security vulnerability scanner for Ruby on Rails applications (https://github.com/presidentbeef/brakeman)
  * `airbrake` - The official Airbrake library for Ruby on Rails. Links to other Airbrake libraries are in the ReadMe (https://github.com/airbrake/airbrake)

#### Testing gems:

  * `RSpec` - http://relishapp.com/rspec/rspec-rails
  * `Cucumber` - https://github.com/cucumber/cucumber-rails

### Config files

  * `database.example.yml` - Database example config file
     cp config/database.example.yml config/database.yml
  * `resque.yml` - Resque
  * `resque_schedule.yml` - Resque Scheduler
  * `unicorn.rb` - Unicorn

### Initializers

  * `devise.rb` - Devise
  * `airbrake.rb` - Airbrake

### Quick start

  * `git clone git@github.com:turbodevs/rails_4_base_app.git --origin rails_4_base_app
    [YOUR-PROJECT-NAME]`
  * `bundle`
  * `rake db:create && rake db:migrate`
  * `rake db:dummy` (add sample data if needed, optional)

### Contributors
 
  * <a href="https://github.com/RuslanHamidullin">Ruslan Khamidullin</a>



