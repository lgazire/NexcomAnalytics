'use strict';
const analyticsService = require('./domain/services/analyticsService.js')
const analyticsTypeEnum = Object.freeze({ "views": "ga:pageviews", "users": "ga:users", "sessions": "ga:sessions", "organicSearches": "ga:organicSearches" })

function start() {
    var result = analyticsService.getAnalyticsData(analyticsTypeEnum.views, '30daysAgo', 'today')
    //adicionar camada de db para salvar o result
}
