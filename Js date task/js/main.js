
setInterval(() => {
    let date = new Date();
    let date2 = new Date(2025, 6, 27);
    let date3 = new Date(date2 - date);

        let seconds = Math.floor((date3 / 1000) % 60);
        let minutes = Math.floor((date3 / (1000 * 60)) % 60);
        let hours = Math.floor((date3 / (1000 * 60 * 60)) % 24);
        let days = Math.floor(date3 / (1000 * 60 * 60 * 24));
        let months = Math.floor(days / 30);
        days %= 30; 

    console.clear();
    console.log(`${months}:Ay  ${days}:Gun  ${hours}:Saat  ${minutes}:Deqiqe  ${seconds}:Saniyye`);
        
    },1000);
    
