const axios = require('axios')
const cheerio = require('cheerio')

const fetchData = async (facilityId) => {
    try {
        const currentTime = new Date()
        currentTime.setUTCHours(7, 0, 0, 0)
        console.log(currentTime.toISOString())
        const timeToFetch = new Date()
        const response = await axios({
            method: 'post',
            url: 'https://www.golfnow.com/api/tee-times/tee-time-results',
            data: {
                "Radius":25,
                "Latitude":28.5383,
                "Longitude":-81.3792,
                "PageSize":30,
                "PageNumber":0,
                "SearchType":1,
                "SortBy":"Date",
                "SortDirection":0,
                "Date":"Sep 02 2023",
                "HotDealsOnly":"false",
                "BestDealsOnly":false,
                "PriceMin":"0",
                "PriceMax":"10000",
                "Players":"4",
                "Holes":"2",
                "RateType":"all",
                "TimeMin":"10",
                "TimeMax":"20",
                "FacilityId":facilityId,
                "SortByRollup":"Date.MinDate",
                "View":"Grouping",
                "ExcludeFeaturedFacilities":true,
                "TeeTimeCount":15,
                "PromotedCampaignsOnly":"false",
                "CurrentClientDate":"2023-08-31T07:00:00.000Z"
            }
        })
        return response.data.ttResults
    } catch (e) {
        console.error(e)
        return []
    }
}

module.exports = fetchData