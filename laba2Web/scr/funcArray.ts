type  NUM = string | null | number | number[]

function funcArray(num:NUM){
    if (num === null) {
        let arr = new Array();
        console.log(arr);
    }
    if (typeof num === 'number') {
        let arr = new Array();
        for (let i = 0; i < num; i++) {
            arr[i] = i + 1;
        }
        console.log(arr);
    }
    if (Array.isArray(num)) {
        console.log(num);
    }
    if (typeof num === 'string') {
        let arr = num.split(' ');
        console.log(arr);
    }
}
funcArray(null);
funcArray(5);
funcArray("оп оп ав аы кц");
funcArray([1, 2, 3, 4, 5]);