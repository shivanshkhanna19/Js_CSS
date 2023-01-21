const names = ['abc','def','efg','ghi','jkl'];

const myForEach = (arr, cb) => {
for (let i = 0; i<arr.length; i++)
{
    const element  = arr[i];
    cb(element);
}

}
for (let i = 0; i < array.length; i++) {
    
    
}

myForEach(names, (name)=> {
    console.log(name);
})
