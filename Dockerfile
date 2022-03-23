FROM ruby:3.0.3-alpine

RUN apk --update add --no-cache --virtual run-dependencies \
build-base curl-dev git libpq-dev \
yaml-dev zlib-dev nodejs yarn \
&& rm -rf /var/cache/apk/* 

RUN mkdir /myapp
WORKDIR /myapp

COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock

RUN bundle config --global frozen 1
RUN bundle config set --without 'development test'
RUN gem install bundler
RUN bundle install

COPY . /myapp
RUN rm -rf node_modules tmp/cache app/assets vendor/assets

EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0", "-p", "3000"]