This `README` assumes some knowledge of what Havoc Fundraising is. If you don't already know, check out [the website](https://reformationfundraising.com) :)

---

The repository holds the source code for [havoc-hub.com](https://havoc-hub.com). It is written using the React framework as of a rewrite in early 2025, evolving from the original version which was written with vanilla JavaScript (i.e. no framework). This worked great for us at the time it was written but we were beginning to outgrow it just as we had with the Squarespace site which came before it.

Before converting to using Netlify and Supabase in Summer 2025, this website contained a leaderboard of the top donators generated using Google API and storing the data in Google Sheets as a form of database, this was... an interesting method of doing things, and the backend of it is hosted on its [own repository](https://github.com/Lordimass/tiltify-grabber) which will explain more about how that works. This was a hacky solution to get around the limitations which hosting the site on GitHub pages brought. More information on the development of the podium/leaderboard is on my blog, here: https://blog.lordimass.net/Donation%20Podium.
