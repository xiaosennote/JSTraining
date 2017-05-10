//冒泡排序
function bubbleSort(arr){
    let len = arr.length;
    for(let i=0;i<len-1;i++){
        for(let j=0;j<len-1-i;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

//选择排序
function selectionSort(arr){
    let len = arr.length;
    let min,temp;
    for(let i=0;i<len-1;i++){
        min = i;
        for(var j=i+1;j<len;j++){
            if(arr[min]>arr[j]){
                min = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}


//插入排序
function insertionSort(arr){
    let len = arr.length;
    let pre,current;
    for(let i=1;i<len;i++){
        pre = i - 1;
        current = arr[i];
        while(pre >= 0&&current < arr[pre]){
            arr[pre+1] = arr[pre];
            pre--;
        }
        arr[pre+1] = current;
    }
    return arr;
}
//var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
//console.log(insertionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]