const express = require("express");
const router = express.Router();

router.get("/posts", (req, res) => {
  const str = [
    {
      name: "Best 20 Items for You",
      date_added: Date.now(),
      is_published: true,
      publish_date: Date.now(),
      main_img:
        "https://m.media-amazon.com/images/I/61F9+CRRdKS._AC_SL1500_.jpg",
      items: [],
    },
    {
      name: "Best 20 Items for You",
      date_added: Date.now(),
      is_published: true,
      publish_date: Date.now(),
      main_img:
        "https://m.media-amazon.com/images/I/61F9+CRRdKS._AC_SL1500_.jpg",
      items: [],
    },
  ];
  res.end(JSON.stringify(str));
});

module.exports = router;
