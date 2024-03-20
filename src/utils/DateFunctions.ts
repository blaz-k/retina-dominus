export function getDateCorrectedFormat(sqlDateString: string) {
    return new Date(sqlDateString).toLocaleDateString('he-IL')
}

export function getDateTimeCorrectedFormat(sqlDateString: string) {
    const dateTime = new Date(sqlDateString);
    return dateTime.toLocaleDateString('he-IL') + " " + dateTime.toLocaleTimeString('he-IL');
}

export function getAgoDate(date: Date, options?:IAgoDateOptions) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 31;
    const year = day * 365;

    if(!options)
        options = getEngAgoDateOptions();

    const dateDiff = new Date().getTime() - new Date(date).getTime();

    let diff: number;
    let option: IAgoDateOption;

    if(dateDiff > year){
        let diff = Math.trunc(dateDiff / year);        
        option = findOption(options.years, diff);
    }
    else if(dateDiff > month){
        const diff = Math.trunc(dateDiff / month);        
        option = findOption(options.months, diff);
    }
    else if(dateDiff > day){
        const diff = Math.trunc(dateDiff / day);        
        option = findOption(options.days, diff);
    }
    else if(dateDiff > hour){
        const diff = Math.trunc(dateDiff / hour);        
        option = findOption(options.hours, diff);
    }
    else if(dateDiff > minute){
        const diff = Math.trunc(dateDiff / minute);        
        option = findOption(options.minutes, diff);
    }
    else{
        const diff = Math.trunc(dateDiff / second);        
        option = findOption(options.minutes, diff);
    }
    return diff + " " + option.label
}

function findOption(options: IAgoDateOption[], value: number): IAgoDateOption{
    let option = options.filter(option => option.maxValue && option.maxValue >= value).sort((a, b) => b.maxValue! - a.maxValue!)[0];
    if(!option)
        option = options.find(option => option.maxValue == null)!;
    
    return option
}

interface IAgoDateOptions{
    seconds: IAgoDateOption[];
    minutes: IAgoDateOption[];
    hours: IAgoDateOption[];
    days: IAgoDateOption[];
    months: IAgoDateOption[];
    years: IAgoDateOption[];
}
function getEngAgoDateOptions(): IAgoDateOptions{
    return {
        seconds:[{
            maxValue: 1,
            label: "second"
        },
        {
            label: "seconds"
        }],
        minutes:[{
            maxValue: 1,
            label: "minute"
        },
        {
            label: "minutes"
        }],
        hours:[{
            maxValue: 1,
            label: "hour"
        },
        {
            label: "hours"
        }],
        days:[{
            maxValue: 1,
            label: "day"
        },
        {
            label: "days"
        }],
        months:[{
            maxValue: 1,
            label: "month"
        },
        {
            label: "months"
        }],
        years:[{
            maxValue: 1,
            label: "year"
        },
        {
            label: "years"
        }]
    }
}

interface IAgoDateOption{
    maxValue?: number;
    label: string;
}