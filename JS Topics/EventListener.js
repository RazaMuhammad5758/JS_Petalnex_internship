// Event propagation

// event bubbeling   bottom to top events apply hongy
// event capturing   top to bottom events apply hongy

// bubbeling example

// is me pehly inside event execcute hoga phr upper wala q k false likha h yahi chez bubbeling kehlati h

// document.getElementById('images').addEventListener('click', function(e){
//     alert('images clicked')
// }, false)

// document.getElementById('sdCard').addEventListener('click', function(e){
//     alert('SD Card clicked')
    // e.stopPropagation()   // ye krny se event bubble nahi hoga
// }, false)


// capturing example

// is me pehly upper event execcute hoga phr lower wala q k true likha h yahi chez capturing kehlati h

document.getElementById('images').addEventListener('click', function(e){
    alert('images clicked')
}, true)

document.getElementById('sdCard').addEventListener('click', function(e){
    alert('SD Card clicked')
    
}, true)


