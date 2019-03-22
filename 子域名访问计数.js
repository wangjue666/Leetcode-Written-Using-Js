var subdomainVisits = function(cpdomains) {
    const obj = {};
    cpdomains.forEach(item => {
        const arr = item.split(' ');
        const count = +arr[0];
        let name = '.' + arr[1];
        
        while (name.indexOf('.') !== -1) {
            name = name.slice(name.indexOf('.') + 1);
            if (!obj[name]) {
                obj[name] = 0;
            }
            obj[name] += count;
        }
    })
    
    const res = [];
    for (let k in obj) {
        if (obj.hasOwnProperty(k)) {
            res.push(`${obj[k]} ${k}`);
        }
    }
    return res;
};
let cpdomains=["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];
subdomainVisits(cpdomains)