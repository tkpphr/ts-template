import TestModule from "./testmodule";


window.addEventListener("load",()=>{
    const testModule=new TestModule("AAA");
    testModule.foo();
});