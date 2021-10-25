const express = require('express')
const router = express.Router()
const Log = require('../models/logs.js')
// const Seed = require('../models/seed.js')

//authenticate
// const isAuthenicated = (req, res, next) => {
//     if( req.session.currentUser){
//         return next()
//     }else {
//         res.redirect('/users/login')
//     }

//    }


//seed route

// router.get('/seed', (req, res) => {
//     Log.create(Seed, (error, data) => {
//         res.redirect('/log')
//     })
// })


//delete route
// add isAuthenticated after id

router.delete('/:id', (req, res) => {
    Log.findByIdAndDelete(req.params.id, (error, data) => {
        res.redirect('/log')
    })
})

// edit route
// add isAuthenticated after edit


router.get('/:id/edit', (req, res) => {
    Log.findById(req.params.id, (error,foundLog)=> {
        res.render(
            'log/edit.ejs',
            {
                logs: foundLog,
                currentUser: req.session.currentUser
            }
        )
    })
} )


//update route

router.put('/:id', (req, res)=> {
    Log.findByIdAndUpdate(
        req.params.id,
        req.body,
        (error, updateLog)=> {
            res.redirect('/log')
        }
    )
})




// new route
// add isAuthenticated after new

router.get('/new', (req,res) => {
    res.render(
        'log/new.ejs',
        {
            currentUser: req.session.currentUser
        }
    )
})




//create route

router.post('/', (req, res)=> {
    Log.create(req.body, (error, logCreated) => {
        res.redirect('/log')
    })
})

//index route

router.get('/', (req, res)=> {
    Log.find({}, (error, allLogs)=>{
        res.render(
            'log/index.ejs',
            {
             logs: allLogs,
             currentUser: req.session.currentUser   
            }
        )
    })
})


///show route
// add isAuthenticated after id

router.get('/:id', (req,res)=> {
    Log.findById(req.params.id, (error, foundLog)=> {
        res.render(
            'log/show,ejs', {
              logs: foundLog, 
              currentUser: req.session.currentUser 
            }
        )
    })
})

module.exports = router