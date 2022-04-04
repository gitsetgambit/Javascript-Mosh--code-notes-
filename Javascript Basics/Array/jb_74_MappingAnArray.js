const num = [1,-1,2,3]

const filtered = num.filter(n => n >= 0)

const items = filtered.map(n => '<li>' + n + '</li>' )

console.log(items);