import nodemailer from 'nodemailer'

// create-app-passwords: https://security.google.com/settings/security/apppasswords
const appPasswordLink = "https://security.google.com/settings/security/apppasswords"


export interface EnvironmentVariables {
    emailId: string,
    password: string,
    sendMailToEmail: string,
}
export const envVar: EnvironmentVariables = {
    emailId: process.env.EMAIL! as string,
    password: process.env.PASSWORD! as string,
    sendMailToEmail: process.env.SEND_TO_EMAIL! as string,
}

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: envVar.emailId,
        pass: envVar.password,
    },
})

export const mailOptions = {
    from: envVar.emailId,
    to: envVar.sendMailToEmail,
    subject: "Forgot Password",
    text: "forgot password token",
    html: `<h2>validate account using token</h2>`,
}