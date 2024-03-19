
const valorAlmacenado : Array<number> = [];

export function memoize(n : number ) : number {
    if (valorAlmacenado[n] != undefined){
        return valorAlmacenado[n] 
    }
    let result = 0
    for (let i=1; i <=n ; i++){
        for (let j =1; j <i; j++){
        result += 1
    }
}
    valorAlmacenado[n] = result
    return result
}

