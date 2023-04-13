const LIMIT_ITEMS = 7

export const urlLaunches = {
  all: `https://api.spacexdata.com/v3/launches?limit=${LIMIT_ITEMS}`,
  one: 'https://api.spacexdata.com/v3/launches/'
}

export const getUrl = (flight_number) => `${urlLaunches.one}${flight_number}`