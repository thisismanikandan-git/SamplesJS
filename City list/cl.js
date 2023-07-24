// Button selection using quer selector  // add Event Listner condition while action on button and perform / to call method  
const button=document.querySelector('button').addEventListener('click',displaystats)

//creating  a div using js.. for
const resultdiv=document.createElement('div')
resultdiv.id='result'
document.getElementById('wrapper').appendChild(resultdiv) 

function displaystats(){
    const input=document.getElementById("input")
    const city=input.options[input.selectedIndex].value
    let population=0,literacyRate=0,language=' '

    switch (city) {
        case 'Bengaluru':
            population=8443675
            literacyRate=88.71
            language='Kannada'
            break;
       case 'Chennai':
                population=4646732
                literacyRate=90.71
                language='Tamil'
                break;
      case 'Mumbai':
                    population=165787941
                    literacyRate=85.71
                    language='Hindi'
                    break;
      }

    let text=`The Indian City of ${city} has a population of ${population} .Language speaking is ${language} and  having a literacy rate of ${literacyRate} % `
    console.log(text);
    document.getElementById('result').innerHTML=text

}