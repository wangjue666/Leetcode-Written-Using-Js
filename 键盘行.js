var findWords = function(words) {
    const rows = [
        'qwertyuiop',
        'asdfghjkl',
        'zxcvbnm'
    ];

    return words.filter(word => {
        const wordArr = word.toLocaleLowerCase().split('');
        return rows.some(row => 
            wordArr.every(item => 
                row.includes(item)
            ))
    })
};

console.log(findWords(["Hello","Alaska","Dad","Peace"]))