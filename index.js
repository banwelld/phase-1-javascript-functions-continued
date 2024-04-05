let dailyOutput

function saturdayFun(activity = 'roller-skate') {

    dailyOutput = `This Saturday, I want to ${activity}!`
    return dailyOutput

}

function mondayWork(activity = 'go to the office') {

    dailyOutput = `This Monday, I will ${activity}.`
    return dailyOutput

}

function wrapAdjective(h = '*') {

    return function(adj = 'a hard worker') {

        return `You are ${h}${adj}${h}!`

    }

}