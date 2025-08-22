
function studentGrade(score)
{
  
    switch(true){
    
       
        case (score>=90&&score<=100):
            console.log("Grade A")
            break
            case (score>=60&&score<=89):
                console.log("Grade B")
                break
                case (score>=35&&score<=59):
                    console.log("Grade C");
                    break
                    case (score>=35&&score<=1):
                        console.log("Grade D")
                        break
        default:
                            console.log("Invalid Score")
                            break

}

}
studentGrade(-9)

