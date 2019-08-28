const settings = {
  "name": "portfolio",
  "state": {
    "frontity": {
      "url": "webuty.ca",
      "title": "Olga Gordeyeva's Portfolio",
      "description": ""
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Web design",
              "/category/web_design/"
            ],
            [
              "Programming",
              "/category/programming/"
            ],
            [
              "First Projects",
              "https://webolga.000webhostapp.com/en/my-projects/"
            ],
            [
              "Travel",
              "/front-page/"
            ],
            [
              "About Us",
              "/about-us/"
            ],
            [
              "Contact Us",
              "/contact-page/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "homepage" : "front-page",
          "api": "https://webuty.ca/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
