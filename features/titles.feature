Feature: What is the page title?

Scenario Outline: The page contains a specific title
  Given url is "<url>"
  When I open the page
  Then it should have a "<title>" title

Examples:
  | url                                          | title                                                       |
  | https://ilarionhalushka.github.io/jekyll-ecommerce-demo/ | Find your spirit animal |
  | https://ilarionhalushka.github.io/jekyll-ecommerce-demo/about/ | Our Story |
  | https://ilarionhalushka.github.io/jekyll-ecommerce-demo/contact/ | Get in touch |
  | https://ilarionhalushka.github.io/jekyll-ecommerce-demo/shipping/ | Delivery Details |
  | https://ilarionhalushka.github.io/jekyll-ecommerce-demo/returns/ | Return policy |
