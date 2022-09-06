const express = require('express')
const app = express()






app.get("/videos", (req, res) => {
    res.json({
        "videos": [
            "video1",
            "video2",
            "video3",
        ]
    })
       
})



app.listen(4000, () => {
    console.log('Listenning on port 4000')
})