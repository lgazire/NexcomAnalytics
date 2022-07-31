use 'strict'
const { google } = require('googleapis')
const scopes = 'https://www.googleapis.com/auth/analytics.readonly'

async function getAnalyticsData(analyticsType, startDate, endDate) {
    const jwt = new google.auth.JWT(process.env.CLIENT_EMAIL, null, process.env.PRIVATE_KEY, scopes)
    const response = await jwt.authorize()
    const result = await google.analytics('v3').data.ga.get({
        'auth': jwt,
        'ids': 'ga:' + process.env.VIEW_ID,
        'start-date': startDate,
        'end-date': endDate,
        'metrics': analyticsType
    })
    return result
}
