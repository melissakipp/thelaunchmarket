FROM ruby:3.2.1-bullseye

RUN apt-get update && \
  apt-get install -y build-essential ruby-nokogiri && \
  rm -rf /var/lib/apt/lists/*
RUN gem install rspec capybara selenium-webdriver

ENTRYPOINT [ "rspec" ]
