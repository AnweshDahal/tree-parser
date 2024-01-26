const _ = require('lodash');

const data = require('./generator');

function TreeParser(arr) {
    let check = _.keyBy(arr, function (o) {
        return o.id;
    });
    arr.map((item) => {
        if (item.pid && 'children' in check[item.pid]) {
            check[item.pid].children.push(item);
        } else if (item.pid) {
            check[item.pid].children = [item];
        } else {
            item.children = [];
        }
    });

    return check[Object.keys(check)[0]];
}

// console.log(data);

// console.log(data);
console.time('Start Parser');
TreeParser(data);
// console.log(TreeParser(data));
console.timeEnd('Start Parser');
