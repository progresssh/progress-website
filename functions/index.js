const functions = require("firebase-functions");
const axios = require("axios").default;

exports.journalRevalidate = functions.firestore
  .document("journal/{docId}")
  .onWrite(() => {
    axios
      .get("https://progress.sh/api/revalidate?secret=SECRET&target=journal")
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  });

exports.oasisRevalidate = functions.firestore
  .document("oasis/{docId}")
  .onWrite(() => {
    axios
      .get("https://progress.sh/api/revalidate?secret=SECRET&target=oasis")
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  });
