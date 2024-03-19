import { memoize } from "../index";
import { expect } from "@jest/globals";

beforeAll

describe( "probando el método memoize", ()=>{

    it("Comprobando que el tiempo en ejecutar una función con el valor almacenado tarda menos que si no lo tiene almacenado", ()=>{
       const startSinMemo = Date.now();
       memoize(1000);
       const finalSinMemo = Date.now(); 
       const tiempoSinMemo = finalSinMemo - startSinMemo;

       const StartConMemo = Date.now();
       memoize(1000);
       const finalConMemo= Date.now();
       const tiempoConMemo = finalConMemo - StartConMemo;

       expect(tiempoConMemo).toBeLessThan(tiempoSinMemo);

    })
});