const stockList = [1, 4, 5]

const distanceList = [
    { srcCityId: 1, distCityId: 2, distance: 15 },
    { srcCityId: 1, distCityId: 3, distance: 20 },
    { srcCityId: 2, distCityId: 1, distance: 15 },
    { srcCityId: 3, distCityId: 1, distance: 20 },
    { srcCityId: 1, distCityId: 4, distance: 25 },
    { srcCityId: 4, distCityId: 1, distance: 25 },
    { srcCityId: 1, distCityId: 5, distance: 30 },
    { srcCityId: 5, distCityId: 1, distance: 30 },
    { srcCityId: 1, distCityId: 6, distance: 35 },
    { srcCityId: 6, distCityId: 1, distance: 35 },
    { srcCityId: 4, distCityId: 3, distance: 15 },
    { srcCityId: 3, distCityId: 5, distance: 20 },
    { srcCityId: 5, distCityId: 3, distance: 20 },
    { srcCityId: 3, distCityId: 6, distance: 25 },
    { srcCityId: 6, distCityId: 3, distance: 25 },
    { srcCityId: 5, distCityId: 4, distance: 10 },
    { srcCityId: 6, distCityId: 4, distance: 20 },
    { srcCityId: 5, distCityId: 6, distance: 15 },
    { srcCityId: 6, distCityId: 5, distance: 15 },
    { srcCityId: 2, distCityId: 3, distance: 10 },
    { srcCityId: 3, distCityId: 2, distance: 10 },
    { srcCityId: 2, distCityId: 4, distance: 20 },
    { srcCityId: 4, distCityId: 2, distance: 20 },
    { srcCityId: 2, distCityId: 5, distance: 25 },
    { srcCityId: 5, distCityId: 2, distance: 25 },
    { srcCityId: 2, distCityId: 6, distance: 30 },
    { srcCityId: 6, distCityId: 2, distance: 30 },
]

let searchNearestStock = function(stockList, distanceList, deliveryCityId) {
    let minDist = Infinity
    let nearestCityId = null

    distanceList.forEach(route => {
        if(route.distCityId === deliveryCityId && stockList.includes(route.srcCityId)) {
            if (route.distance < minDist) {
                minDist = route.distance
                nearestCityId = route.srcCityId
            }
        }
    })

    if (nearestCityId !== null) {
        return nearestCityId
    } else {
        return ('нет подходящих городов для доставки')
    }
}

console.log(searchNearestStock(stockList, distanceList, 1))
console.log(searchNearestStock(stockList, distanceList, 2))
console.log(searchNearestStock(stockList, distanceList, 3))
console.log(searchNearestStock(stockList, distanceList, 4))
console.log(searchNearestStock(stockList, distanceList, 5))
console.log(searchNearestStock(stockList, distanceList, 6))