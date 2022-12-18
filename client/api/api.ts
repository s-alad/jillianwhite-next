import env from 'node:process';

const client = require('contentful').createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
  })

function getMedia() {
    /* console.log(client) */
    return client.getEntries({
        content_type: 'media'
    }).then((response: { items: any; }) => {console.log(response.items); return response.items})
}

function getEvents() {
    return client.getEntries({
        content_type: 'speaking'
    }).then((response: { items: any; }) => {console.log(response.items); return response.items})
}

function getPodcasts() {
    return client.getEntries({
        content_type: 'podcast'
    }).then((response: { items: any; }) => {console.log(response.items); return response.items})
}

function getVideos() {
    return client.getEntries({
        content_type: 'video'
    }).then((response: { items: any; }) => {console.log(response.items); return response.items})
}

function getSpeech() {
    return client.getEntries({
        content_type: 'speech'
    }).then((response: { items: any; }) => {console.log(response.items); return response.items})
}


export {getMedia, getEvents, getPodcasts, getVideos, getSpeech}