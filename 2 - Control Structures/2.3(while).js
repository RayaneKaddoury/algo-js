/*Display all even numbers between 1 and 100.

Bonus: do two different versions. The first one should use while and make a loop that will execute 100 times.

The second one should use for and make a loop that will execute 50 times.

WHILE VERSION
*/

let i = 0;

while (i <= 100) {
    i += 1;
    if (i % 2 == 0) {
        console.log(i)
    }
    }   