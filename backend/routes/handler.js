const express = require("express");
const router = express.Router();

let fakeData = [];
for (let index = 0; index < 25; index++) {
  fakeData.push({
    name: "Best 20 Items for You",
    date_added: Date.now(),
    is_published: true,
    publish_date: Date.now(),
    main_img: "https://m.media-amazon.com/images/I/61F9+CRRdKS._AC_SL1500_.jpg",
    items: [],
    category: "Gift",
  });
}

router.get("/posts", (req, res) => {
  const str = fakeData;
  res.end(JSON.stringify(str));
});

module.exports = router;
