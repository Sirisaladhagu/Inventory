function inventoryList(){
    const inventory = {};
    const itemList = [];

    function add(name){
        if(!inventory[name]){
            inventory[name] = true;
            itemList.push(name);
        }
    }
    function remove(name){
        if(inventory[name]){
            delete inventory[name];
            itemList.splice(itemList.indexOf(name), 1);
        }
    }
    function getList(){
        return itemList;
    }
    return{
        add,
        remove,
        getList
    };
}

const list = inventoryList();
list.add('toyata');
list.add('hyundai');
list.add('maruthi');
list.add('tata');
list.add('hyundai');    // Adding a duplicate item

console.log(list.getList()); // outputs ['toyata','hyundai','maruthi','tata']

list.remove('maruthi');
console.log(list.getList()); // outputs ['toyata','hyundai','tata']

list.remove('mahindra');
console.log(list.getList()); //doesn't throw an error

