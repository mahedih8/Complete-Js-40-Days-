

// all task will find task.md file

function parentFunc(){
    let name = 'Mahedi Hasan';
    function childFunc(){
        console.log(name);
    }
    childFunc();
}
parentFunc();


function outerFunc(){
    console.log(name);
    
    function innerChildFunc(){
        let name = 'Mahedi';
    }
    innerChildFunc();
}
outerFunc()


