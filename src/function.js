

// create Alert
const createAlert=(text ,type="info")=>{
    return `
    <p class="alert alert-${type} d-flex justify-content-between"> ${text} <button class="btn-close" data-bs-dismiss="alert"></button></p>
    `;
};

// set data local storage;
const setDatals=(key,data)=>{
    localStorage.setItem(key,JSON.stringify(data));
};

// get data local storage;
const getDatals=(key)=>{
    if(localStorage.getItem(key)){
     return JSON.parse(localStorage.getItem(key));
    }else{
        return []
    };
};

// here are the time stamp functon ;

const timeAgo=(timestamp)=>{
    const second=1000;
    const minute=60*second;
    const hour=60*minute;
    const day=24*hour;
    const week=7*day;
    const month=30*day;
    const year=365*day;
    const timeElepassed=Date.now()-timestamp;
    if(timeElepassed<minute){
        return `${Math.floor(timeElepassed/second)} seconds ago`;
    } else if(timeElepassed<hour){
        return `${Math.floor(timeElepassed/minute)} minutes ago`;
    }else if(timeElepassed<day){
        return`${Math.floor(timeElepassed/hour)} hours ago`
    }else if(timeElepassed<week){
        return`${Math.floor(timeElepassed/day)} days ago`;
    }else if(timeElepassed<month){
        return `${Math.floor(timeElepassed/week)} weeks ago`;
    }else if(timeElepassed<year){
        return `${Math.floor(timeElepassed/month)} months ago`;
    }else{
        return `${Math.floor(timeElepassed/year)} years ago`;
    };
};