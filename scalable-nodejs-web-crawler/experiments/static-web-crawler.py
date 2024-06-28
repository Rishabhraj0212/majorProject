# Static Web Page Crawling 

# requests -> is used to do GET network request and fetch html
# BeautifulSoup -> is used to parse the HTML & Query over it
# import requests
from bs4 import BeautifulSoup

# Here we pass the url we want to scrap
URL = 'www.google.com'
page = requests.get(URL)

# Configuring BeautifulSoup for parsing
soup = BeautifulSoup(page.content, 'html.parser')

# Here we are only querying only anchor tag and printing it in console
results = soup.find_all('a')
print(results)

