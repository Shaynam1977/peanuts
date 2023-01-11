const router= require("express").Router()
const fs=require("fs")
let store=require("./db/db.json")

router.get('/notes', (req, res) =>
 res.json(store)
);
// post route that takes in values as rec.body
router.post('/notes', (req, res) =>
 { let newNoteModel={
    id: Math.random(),
    title: req.body.title,
    text: req.body.text
};
store.push(newNoteModel);
fs.writeFileSync("./db/db.json", JSON.stringify(store), function(err, res) {
    if (err) {
        throw err;
    }
});
res.json(store);

 }
);

module.exports=router

