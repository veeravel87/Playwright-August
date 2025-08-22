


// let num=10
// if(num==0){  //true
//   console.log("its neutral")
// }else if(num>0){//true
//     console.log("its positive number")
// }else{
//     console.log("its negative number")
// }


function launchBrowser()
    {
let browserName="Chrome"
if(browserName==="Chrome")
    {
        console.log("Chrome")
    }else if(browserName==="edge")
    {
        console.log("Edge")
    }else
    {
        console.log("Safari")
    }
   

    }
    launchBrowser()

    function runTests()
    {
    let testType="Smoke"
    switch(testType)
    {
        case "Smoke":
            console.log("Testing Type is Smoke Testing")
                break
                case "Sanity":
                console.log("Testing Type is Sanity Testing")     
                break 
                case "Regression":
                    console.log("Testing Type is Regression Testing")
                    break
                    default:
                        console.log("Retest")

    }
    }

    runTests()