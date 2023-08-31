const axios = require('axios')
const cheerio = require('cheerio')

const fetchData = async () => {
    try {
        const currentTime = new Date()
        const timeToFetch = new Date()
        const response = await axios({
            method: 'post',
            url: 'https://www.golfnow.com/api/tee-times/tee-time-results',
            data: {
                "Radius":"25",
                "Latitude":"37.4647",
                "Longitude":"-122.2304",
                "PageSize":30,
                "PageNumber":0,
                "SearchType":0,
                "SortBy":"Facilities.Distance",
                "SortDirection":"0",
                "Date":"Sep 02 2023",
                "HotDealsOnly":"false",
                "PriceMin":"0",
                "PriceMax":"10000",
                "Players":"4",
                "Holes":"2",
                "RateType":"all",
                "TimeMin":"10",
                "TimeMax":"20",
                "SortByRollup":"Facilities.Distance",
                "View":"Course",
                "ExcludeFeaturedFacilities":false,
                "TeeTimeCount":15,
                "PromotedCampaignsOnly":"false",
                "Q":"94061",
                "QC":"GeoLocation",
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