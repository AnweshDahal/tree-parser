let items = [];
let titles = [
    'Accountant',
    'Engineer',
    'Doctor',
    'Teacher',
    'Nurse',
    'Driver',
    'Cook',
    'Guard',
    'Cleaner',
    'Clerk',
]; // Add more titles if needed

for (let i = 0; i < 1000000; i++) {
    let item = {
        id: 980 + i,
        title: titles[Math.floor(Math.random() * titles.length)],
        pid: i === 0 ? null : items[Math.floor(Math.random() * i)].id,
        globalUserId: '652fe97b40739536088b3b46',
        name: 'GUS1 MICHOS',
        email: 'GUSMICHOS@YOPMAIL.COM',
        profileImage: '/img/user_info.png',
        status: 1,
        departmentId: 42,
        departmentName: 'IT',
        color: '#1AA59A',
    };
    items.push(item);
}

module.exports = items;
