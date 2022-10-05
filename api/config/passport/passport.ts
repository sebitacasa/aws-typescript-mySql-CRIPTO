import bCrypt from "bcrypt"
import { reset } from "nodemon";






const passportFunction = async (User: any, passport: any) => {
   
 
   
    var localStrategy = require("passport-local").Strategy;
    passport.use("local-signup", new localStrategy(
        {
            usernameField: "email",
            passwordField: "password",
            
        },
        async ( req: any,  done: any) => {
            const {firstName, lastName, userName, email, password} = req.body

            let encrypetedPassword = await bCrypt.hash(password, 10);

            const user: any = await User.findOne({
                where: {
                    email: email
                }
            });
            if (user) { return done(null, false, {
                message: 'That email is already taken'
            }); }
           
                const newUser = await User.create({
                    firstName,
                    lastName ,
                    userName ,
                    email,
                    password: encrypetedPassword
                });
                if (!newUser) { return done(null, false); }

                else {
                    return done(null, newUser);
                }
            }


        
    ))

    //serialize
// passport.serializeUser((User: any, done: any) => {
//     done(null, User.id)
// })

passport.serializeUser(function(user: { id: any; }, done: (arg0: null, arg1: any) => void) {
    done(null, user.id);
});

// passport.deserializeUser(async (id: string, done: any) => {
//     const userId = await User.findByPk(id)
//     if(userId){
//         done(null,  User.get())
//     } else {
//         done(User.error, null)
//     }
// } )

passport.deserializeUser(function (id: any, done: (arg0: null, arg1: null) => void) {
    User.findByPk(id).then(function (User: { get: () => any; errors: any; }) {
        if (User) {
            done(null, User.get());
        } else {
            done(User, null);
        }
    });
});
} 

export {passportFunction }