const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod')

function ValidateUser(obj) {
    const schema = zod.object({
        username: zod.string().email(),
        password: zod.string().min(6)
    })
    const response = schema.safeParse(obj)
    return response
}

/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {
    // Your code here
    const response = ValidateUser({ username: username, password: password });
    if (response.success) {
        const signature = jwt.sign({username , password}, jwtPassword);
        return signature;
    }
    else
        return null
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */

/*
// My doubt  : 
async function verifyToken(token, jwtPassword) {
    try {
        await jwt.verify(token, jwtPassword);
        return true; // Token is valid
    } catch (err) {
        return false; // Token is not valid
    }
}

// Example usage
async function someFunction() {
    const isValid = await verifyToken(token, jwtPassword);
    console.log(isValid); // Use the result as needed
}

*/

function verifyJwt(token) {
    // Your code here

    // -->This won't work as this code uses a callback function with jwt.verify, which handles the verification asynchronously.
    // jwt.verify(token, jwtPassword, async function (err) {
    //     if (err) {
    //         // console.log("Token not valid")
    //         return false
    //     }
    //     else {
    //         return true
    //     }
    // })

    let ans = true ;
    try{
        jwt.verify(token , jwtPassword) ;
    }
    catch(err){
        ans = false
    }
    return ans ;
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    // Your code here
    const decoded = jwt.decode(token) ;
    if(decoded)return true 
    else
    return false
}


module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword,
};
