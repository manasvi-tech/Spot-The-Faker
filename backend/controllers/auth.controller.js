import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender,email } = req.body;

        if (password != confirmPassword) {
            return res.status(400).json({ error: "Password does not match" })
        }
        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ error: "Username already exists" })
        }

        // HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);


        // https://avatar-placeholder-iran.liara.run/

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashPassword,
            email,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if (newUser) {
            //Generate JWT token here
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        }
        else {
            res.status(400).json({ error: "Invalid user data" })
        }



    } catch (err) {
        console.log("Error in signup controller" +err.message)
        res.status(500).json({ error: "Internal Server error" })
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        // Debugging logs
        if (!user) {
            console.log(`User not found: ${username}`);
            return res.status(500).json({ error: "Invalid username or password" });
        }

        // Correctly handle the password comparison
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            console.log(`Password mismatch for user: ${username}`);
            return res.status(500).json({ error: "Invalid username or password" });
        }

        // Generate JWT token and set it in the response cookie
        generateTokenAndSetCookie(user._id, res);

        return res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        });
    } catch (err) {
        console.log("Error in login controller", err);
        return res.status(500).json({ error: "Internal Server error" });
    }  
}



export const logout = (req, res) => {
    try{
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({error:"Logged out succesfully"});

    } catch (err) {
        console.log("Error is logout controller")
        res.status(500).json({ error: "Internal Server error" })
    }  
}