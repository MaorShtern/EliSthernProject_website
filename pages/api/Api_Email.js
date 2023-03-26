import {
    mailOptions,
    transporter
} from "../config/nodemailer";

export default async function handler(req, res) {
    let body = req.body

    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: "בקשה ליצירת קשר",
            text: "",
            html: `<div>
            <h1>שם הלקוח: ${body.name}</h1>
            <h3>מספר טלפון ${body.phone}</h3>
            <h3>מייל: ${body.email}</h3>
            ${body.subject !== undefined ? (
                `<h3>נושא: ${body.subject}</h3>
                <h3>סוג הפרוייקט: ${body.projectThem}</h3>`
            ) : null}
            <p>${body.notes}</p>
        </div>`
        })
        res.status(200).json()
    } catch (error) {
        console.log(error);
        res.status(400).json()

    }


}