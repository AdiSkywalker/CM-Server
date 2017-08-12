const challenges = [
    {
        id:1,
        name:'Addition of two numbers',
        description:`Create a function called Sum. Sum should take two arguments and return 
                     addition of two numbers passed in as arguments`,
        tests:[
            {
                functionName:'Sum',
                args:[1,2],
                output:3
            },
            {
                functionName:'Sum',
                args:[5,6],
                output:11
            },
            {
                functionName:'Sum',
                args:[-1,2],
                output:1
            },
            {
                functionName:'Sum',
                args:[1,-2],
                output:-1
            },
            {
                functionName:'Sum',
                args:[0,0],
                output:0
            }
        ]
    }
];

module.exports = challenges;