FROM ruby:3.0.3

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

RUN mkdir /myapp
WORKDIR /myapp

COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock

RUN bundle config --global frozen 1
RUN bundle config set without 'development test'
RUN bundle install

COPY . /myapp
RUN bundle exec rails assets:precompile

EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0", "-p", "3000"]