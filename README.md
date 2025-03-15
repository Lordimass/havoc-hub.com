This `README` assumes some knowledge of what Reformation Fundraising is. If you don't already know, check out [the website](https://reformationfundraising.com) :)

---

The repository holds the source code and built site (on the gh-pages branch) for [reformationfundraising.com](https://reformationfundraising.com). It is written using the React framework as of a rewrite in early 2025, evolving from the original version which was written with vanilla JavaScript (i.e. no framework). This worked great for us at the time it was written but we were beginning to outgrow it just as we had with the Squarespace site which came before it.

Part of this website is a leaderboard of the top donators to the various charities which we have supported through this project, this was somewhat of an endevour in itself, and the backend of it is hosted on its [own repository](https://github.com/Lordimass/tiltify-grabber) which will explain more about how that works in the back end, but as a summary here, we fetch data from a Google Sheet using a restricted Google API key in order to live update a leaderboard of the top donators. This is a hacky solution to get around the limitations which hosting the site on GitHub pages brings. More information on the development of the podium/leaderboard is on my blog, here: https://blog.lordimass.net/Donation%20Podium
