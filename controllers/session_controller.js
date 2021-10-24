const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/user.js')


// const isntAuthenticated = (req, res, next) => {
//     if (!req.session.currentUser) {
//       return next()
//     } else {
//       res.redirect('/')
//     }
//   };
  
//   const isAuthenticated = (req, res, next) => {
//     if (req.session.currentUser) {
//       return next()
//     } else {
//       res.redirect('/users/login')
//     }
//   };

//user menu


//user Authenticate
sessions.get('/new', (req, res)=> {
    res.render('sessions/new.ejs', {
        currentUser: req.session.currentUser
    })
})

//create
sessions.post('/', (req, res) => {
    User.findOne({username:req.body.username}, (error, foundUser)=> {
        if(error){
            res.send('find the issue')
        } else if(!foundUser){
            res.send('<a href ="/"> No user found</a>')
        }else{
            if(bcrypt.compareSync(req.body.password, foundUser.password)){
                req.session.currentUser = foundUser
                console.log('it worked:', foundUser)
                res.redirect('/')
                
            }else{
                res.send('password aint it')
            }
        }
    })
})

sessions.delete('/', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
})

module.exports = sessions