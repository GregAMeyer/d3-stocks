# d3-stocks
A stock-analysis tool for visualizing data not traditionally associated with stocks. Utilizes D3 to show the relationship between a stock price and a Google keyword search volume over time.
## Challenges
There is no Google Trends API to gather data from.
I figured out that the data was available in an HTML script tag at the bottom of a particular Google URL. I was able to turn the data into something usable for my d3 visualization. Essentially I turned a particular Google URL into an API I could make cross-site requests to.
## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

