const sgMail = require('@sendgrid/mail')
const { htmlToText } = require('html-to-text');

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const domainWhitelist = [
    'blakepetersen.io',
    'dalebridges.com',
    'kirbyelectriccompany.com'
]

module.exports = (req, res) => {
    const _referer = new URL(req.headers.referer)
    if (!_referer || domainWhitelist.includes(_referer.hostname)) {
        return;
    }

    const msg = {
        to: req.query.to, // Change to your recipient
        from: req.query.from, // Change to your verified sender
        subject: req.query.subject,
        text: htmlToText(req.query.body, {
            wordwrap: 130
            }),
        html: req.query.body,
    }

    sgMail
        .send(msg)
        .then(() => {
            res.json({
                body: 'success',
                status: 200
            })
        })
        .catch((error) => {
            res.json({
                body: `error: ${error}`,
                status: 500
            })
        })
}