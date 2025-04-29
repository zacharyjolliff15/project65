/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanToIntObject = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (romanToIntObject[s[i]] < romanToIntObject[s[i + 1]]) {
            result -= romanToIntObject[s[i]];
        } else {
            result += romanToIntObject[s[i]];
        }
    }
    console.log("🚀 ~ romanToInt ~ result:", result)
    return result;
};
s = "XLIX"
romanToInt(s)

/*
i	s[i]	s[i+1]	value(s[i])	value(s[i+1])	value(s[i])<value(s[i+1])?	result change	running total
0	X	L	10	50	10 < 50 → true	–10	–10
1	L	I	50	1	50 < 1 → false	+50	40
2	I	X	1	10	1 < 10 → true	–1	39
3	X	undefined	10	undefined	10 < undefined → false	+10	49

*/