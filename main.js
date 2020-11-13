// 1.
var user = {};
user['name'] = 'John';
user['surname'] = 'Mike';
user.name = 'Peter';
delete user.name;
console.log(user);

//2.
var number = 0;
var fruit = {
apple: 20,
pear: 20,
peach: 10
};
for (var key in fruit) {
    number += fruit[key];
}
console.log(number);