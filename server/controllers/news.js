import "dotenv/config";
import { newsServices } from "../services/news.js";

export const newsControllers = {
  getHeadlines: async function (req, res) {
    try {
      console.log(req.query);
      const { category, lang, country } = req.query;

      res.status(200).json({
        data: {
          data: {
            totalArticles: 740737,
            articles: [
              {
                title: "Andrew Scott in running for Emmy as Shōgun set to reign",
                description: "Andrew Scott is in the running to win a best actor Emmy award this Sunday night, while the historical epic Shōgun is tipped to make history as the first non-English-language winner for best drama.",
                content: "Andrew Scott is in the running to win a best actor Emmy award this Sunday night, while the historical epic Shōgun is tipped to make history as the first non-English-language winner for best drama.\nThe Dublin star has been nominated for his mesmerisin... [5453 chars]",
                url: "https://www.rte.ie/entertainment/2024/0915/1469876-andrew-scott-in-running-for-emmy-as-shgun-set-to-reign/",
                image: "https://img.rasset.ie/0020f2ba-1600.jpg",
                publishedAt: "2024-09-15T05:00:00Z",
                source: {
                  name: "RTÉ News",
                  url: "https://www.rte.ie",
                },
              },
              {
                title: "Neeraj Chopra Finishes Second in Diamond League 2024 Final in Brussels",
                description: "Ace Indian javelin throw athlete Chopra came in second with a best attempt of 87.86m on the day, behind Anderson Peters of Granada effort of 87.87m.",
                content: "Neeraj Chopra finished second in the Diamond League 2024 Final in Brussels on Sunday with a best attempt of 87.86m on the day, behind Anderson Peters of Granada’s effort of 87.87m.\nNeeraj missed out on the crown by the smallest of margins as Peters p... [1820 chars]",
                url: "https://www.news18.com/sports/neeraj-chopra-finishes-second-in-diamond-league-2024-final-in-brussels-9051414.html",
                image: "https://images.news18.com/ibnlive/uploads/2024/09/copy-of-sports-24-2024-09-b71a5a855fac386752973e025f808bdd-16x9.jpg?impolicy=website&width=1200&height=675",
                publishedAt: "2024-09-15T04:57:24Z",
                source: {
                  name: "News18",
                  url: "https://www.news18.com",
                },
              },
              {
                title: "NRL finals live updates: Canterbury Bulldogs vs Manly Sea Eagles - blog, scores and stats",
                description: "Canterbury's first finals campaign since 2016 has been overshadowed by winger Josh Addo-Carr's positive drug test, but they must overcome this drama to defeat Manly. Follow live.",
                content: "Canterbury's first finals campaign since 2016 has been overshadowed by winger Josh Addo-Carr's positive drug test.\nBut the Bulldogs must put that behind them in an elimination match against Manly to end the first week of the NRL finals.\nFollow the li... [5527 chars]",
                url: "https://www.abc.net.au/news/2024-09-15/nrl-finals-live-updates-canterbury-bulldogs-vs-manly-sea-eagles/104336548",
                image: "https://live-production.wcms.abc-cdn.net.au/5329816286aa55d7306ff8b8109ed51a?impolicy=wcms_watermark_news&cropH=2284&cropW=4060&xPos=0&yPos=0&width=862&height=485&imformat=generic",
                publishedAt: "2024-09-15T04:53:44Z",
                source: {
                  name: "ABC News",
                  url: "https://www.abc.net.au",
                },
              },
              {
                title: "iPhone 16 Series now available for pre-order in India; Sale starts Sept 20 - Check prices and offers",
                description: "New Delhi: Globally renowned for its premium handsets, tech giant Apple recently launched the iPhone 16 line-up, including the hot-favorite iPhone 16 Pro variant. The device will be available from Sep - iPhone 16 Series now available for pre-order in India; Sale starts Sept 20 — Check prices and offers",
                content: "Home\nBusiness\niPhone 16 Series now available for pre-order in India; Sale starts Sept 20 — Check prices and offers\niPhone 16 Series now available for pre-order in India; Sale starts Sept 20 — Check prices and offers\nNew Delhi: Globally renowned for i... [2704 chars]",
                url: "https://www.india.com/business/iphone-16-series-now-available-for-pre-order-in-india-sale-starts-sept-20-check-prices-and-offers-7247268/",
                image: "https://static.india.com/wp-content/uploads/2024/09/iphone-11-1.jpg",
                publishedAt: "2024-09-15T04:45:59Z",
                source: {
                  name: "India.com",
                  url: "https://www.india.com",
                },
              },
              {
                title: "'We Would Have Tea If...': How Doctors On Protest In Kolkata Reacted To CM Mamata's Offer",
                description: "Junior doctors in Kolkata protest for the fifth night at Swasthya Bhawan demanding justice after the arrest of Sandip Ghosh. Chief Minister Mamata Banerjee's meeting with doctors ends without resolution",
                content: "Rejecting Bengal Chief Minister Mamata Banerjee’s offer of tea, junior doctors in Kolkata continued their protest at Swasthya Bhawan on Sunday, demanding justice for their colleague who was raped and murdered last month. “We were asked to come for an... [2547 chars]",
                url: "https://www.news18.com/india/how-did-protesting-doctors-react-to-bengal-cm-mamata-banerjees-tea-invite-9051465.html",
                image: "https://images.news18.com/ibnlive/uploads/2024/09/untitled-design-2024-09-7ea99cb0f4f5018acf8f929eedae143c-16x9.png?impolicy=website&width=1200&height=675",
                publishedAt: "2024-09-15T04:40:55Z",
                source: {
                  name: "News18",
                  url: "https://www.news18.com",
                },
              },
              {
                title: "40 students pilot 1st college in Jaen, Nueva Ecija",
                description: "An inaugural batch of 40 students are the first enrollees of the first college in Jaen, Nueva Ecija.",
                content: "An inaugural batch of 40 students are the first enrollees of the first college in Jaen, Nueva Ecija.\nThe so-called ‘Magic 40’ are enrolled in the two pilot programs, Bachelor of Early Childhood Education and Bachelor of Science in Entrepreneurship.\nO... [380 chars]",
                url: "https://www.gmanetwork.com/news/topstories/regions/920516/40-students-pilot-1st-college-in-jaen-nueva-ecija/story/",
                image: "https://images.gmanews.tv/webpics/2024/09/Jaen_Nueva_Ecija_students_9-15-24_2024_09_15_12_38_10.jpg",
                publishedAt: "2024-09-15T04:40:37Z",
                source: {
                  name: "GMA News Online",
                  url: "https://www.gmanetwork.com",
                },
              },
              {
                title: "Empty mooncake boxes listed online for up to $1,800",
                description: "Mooncakes are not only a yummy treat but also a feast for the eyes too, judging by the ofttimes elaborate packaging they come in. Mooncake boxes have gotten more creative over the years, and this year's designs features 'tingkat'-shaped holders to chic handbags and even one with a toy train included. Seen as limited edition collectibles by some — especially...",
                content: "Mooncakes are not only a yummy treat but also a feast for the eyes too, judging by the ofttimes elaborate packaging they come in.\nMooncake boxes have gotten more creative over the years, and this year's designs features 'tingkat'-shaped holders to ch... [2634 chars]",
                url: "https://www.asiaone.com/lifestyle/empty-luxury-mooncake-boxes-listed-online-1800-Audemars-Piguet",
                image: "https://media.asiaone.com/sites/default/files/styles/article_top_image/public/original_images/Sep2024/mooncakeboxes.jpg?itok=EjUIGToA",
                publishedAt: "2024-09-15T04:40:00Z",
                source: {
                  name: "AsiaOne",
                  url: "https://www.asiaone.com",
                },
              },
              {
                title: "Texas QB Quinn Ewers departs with strained abdomen and Arch Manning leads win over UTSA",
                description: "Texas quarterback Quinn Ewers departed the No. 2 Longhorns’ 56-7 win over UTSA in the second quarter with a strained abdomen.",
                content: "The AP Top 25 college football poll is back every week throughout the season! Get the poll delivered straight to your inbox with AP Top 25 Poll Alerts. Sign up here.\nAUSTIN, Texas (AP) — For the third time in three seasons, Texas quarterback Quinn Ew... [1798 chars]",
                url: "https://apnews.com/article/texas-ewers-manning-5814b956c10e31fc82e4acc9d6459814",
                image: "https://dims.apnews.com/dims4/default/3725a47/2147483647/strip/true/crop/5015x2821+0+139/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F9a%2F32%2Fe48445a9fdf4f4c91d55d19341b8%2Fcf55e8f1bc3f4bf5a2e7832d90acd8a1",
                publishedAt: "2024-09-15T04:34:00Z",
                source: {
                  name: "The Associated Press",
                  url: "https://apnews.com",
                },
              },
              {
                title: "Teen's bid for int'l science prize could revive broken labs in Pampanga",
                description: "A Pampangueño student's quest for international acclaim in science communication could lead to much-needed upgrades for science facilities in Pampanga.",
                content: "A student's quest for international acclaim in science communication could lead to much-needed upgrades for science facilities in Pampanga.\nRephael Raagas, a recent graduate of the Philippine Science High School Central Luzon Campus, is making headli... [3982 chars]",
                url: "https://www.gmanetwork.com/news/topstories/regions/920514/teen-s-bid-for-int-l-science-prize-could-revive-broken-labs/story/",
                image: "https://images.gmanews.tv/webpics/2024/09/rephael_raagas_2024_09_15_12_21_34.jpg",
                publishedAt: "2024-09-15T04:24:40Z",
                source: {
                  name: "GMA News Online",
                  url: "https://www.gmanetwork.com",
                },
              },
              {
                title: "Roosters go top in NRLW as they end Cowboys' finals hopes with 24-12 win, Eels stay in top-four race after beating Raiders 18-16",
                description: "The Sydney Roosters flew to top spot on the NRLW ladder by beating North Queensland 24-12, as Parramatta keep its slim top-four hopes alive with an 18-16 win over Canberra.",
                content: "The Sydney Roosters have grabbed top spot on the NRLW ladder and ended North Queensland's finals hopes with a 24-12 win in Gosford.\nIt comes as Parramatta kept its mathematical chances of a finals berth alive by beating Canberra 18-16.\nThe Roosters j... [2871 chars]",
                url: "https://www.abc.net.au/news/2024-09-15/nrlw-roosters-cowboys-raiders-eels/104353362",
                image: "https://live-production.wcms.abc-cdn.net.au/eca7cd3b8beadfa5937e6c5ade9228af?impolicy=wcms_watermark_news&cropH=1927&cropW=3425&xPos=0&yPos=225&width=862&height=485&imformat=generic",
                publishedAt: "2024-09-15T03:50:38Z",
                source: {
                  name: "ABC News",
                  url: "https://www.abc.net.au",
                },
              },
            ],
          },
          ok: true,
        },
        ok: true,
      });

      // const response = await newsServices.getHeadlines({ category, lang, country });

      // if (response.ok) {
      //   res.status(200).json({ data: response.data, ok: true });
      // } else {
      //   res.status(400).json({ err: response.err, ok: true });
      // }
    } catch (error) {
      res.status(500).json({ err: "Something went wrong!", ok: false });
    }
  },
  searchNews: async function (req, res) {
    try {
      const { query, lang, country } = req.query;

      const response = await newsServices.searchNews({ query, lang, country });

      if (response.ok) {
        res.status(200).json({ data: response.data, ok: true });
      } else {
        res.status(400).json({ err: response.err, ok: true });
      }
    } catch (error) {
      res.status(500).json({ err: "Something went wrong!", ok: false });
    }
  },
};
