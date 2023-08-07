/* ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো।  */
/* ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 
 */
/* ৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে।  */
/* ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ৭ দিয়ে ভাগ করে ভাগফল রিটার্ন করবে।  */
/* ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও।  */
/* ৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। */
/*  অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
 */


/* const studentDetails = {
    name: 'Afif Hossain',
    age: 20,
    isCollgeStudents: true,
    favSub: ['bangla', 'english', 'mathmatichs', 'horror fiction'],
    income: 6000,
    familyMembrJobs: {
        father: 'Family header', mother: 'House-wife', sister: 'Studying'
    },
    incomeExpense: function (expense, income) {
        this.income = this.income - expense + income
        console.log(this)
    },
    seeFuntion: function () {
        console.log(this.favSub.map(member => member))
    }

}; */
// const familyHeader = Object.keys(studentDetails.familyMembrJobs);
/*const name = `My name is ${studentDetails.name}. I am ${studentDetails.age}.Our family member header is my ${familyHeader[0]} Karim.I love to read ${studentDetails.favSub[3]}` */
// const name = `My name is ${studentDetails.name}. I am ${studentDetails.age}.Our family member header is my ${familyHeader[0]} Karim.I love to read ${studentDetails.favSub[3]}`
// console.log(name);
/* I used studentDetails.familyMemberJobs[familyHeader[0]] to access the family  */
// studentDetails.incomeExpense(4000, 8000);
// studentDetails.seeFuntion();



/* const studentDetails = {
    name: 'Afif Hossain',
    age: 20,
    isCollegeStudent: true,
    favSub: ['bangla', 'english', 'mathematics', 'horror fiction'],
    income: 6000,
    familyMemberJobs: {
        father: 'Family header', mother: 'House-wife', sister: 'Studying'
    },
    incomeExpense: function (expense, income) {
        this.income = this.income - expense + income;
        console.log(this);
    },
    seeFunction: function () {
        console.log(this.favSub.map(member => member));
    }
};

const familyHeader = Object.keys(studentDetails.familyMemberJobs);

const name = `My name is ${studentDetails.name}. I am ${studentDetails.age}. Our family member header is my ${studentDetails.familyMemberJobs[familyHeader[0]]}. I love to read ${studentDetails.favSub[3]}.`;

console.log(name);
 */
/* const zero = () => 89 */;
/* console.log(zero()) */
/* const returVag = num => num / 7;
console.log(returVag(70))
 */
/* const plus2 = (num, num2) => {
    const sum = num + num2;
    return sum / 2
};
console.log(plus2(5, 8)); */

/* const numbers = (num1, num2) => {
    const arr = [num1, num2];
    const sum = []
    for (const num of arr) {
        const nam = num + 7;
        sum.push(nam);
    };
    return sum[0] + sum[1];
};
console.log(numbers(20, 10)); */