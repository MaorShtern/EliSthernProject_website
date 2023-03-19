import nodemailer from "nodemailer"


const email = "maor100maor1@gmail.com"
const pass = "zfunwbmritaajeki"


export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass,
    }
})

export const mailOptions = {
    from: email,
    to: email
}