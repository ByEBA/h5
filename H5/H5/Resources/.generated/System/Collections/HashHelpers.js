    H5.define("System.Collections.HashHelpers", {
        statics: {
            fields: {
                HashPrime: 0,
                MaxPrimeArrayLength: 0,
                RandomSeed: 0,
                primes: null
            },
            ctors: {
                init: function () {
                    this.HashPrime = 101;
                    this.MaxPrimeArrayLength = 2146435069;
                    this.RandomSeed = System.Guid.NewGuid().getHashCode();
                    this.primes = System.Array.init([
                        3, 
                        7, 
                        11, 
                        17, 
                        23, 
                        29, 
                        37, 
                        47, 
                        59, 
                        71, 
                        89, 
                        107, 
                        131, 
                        163, 
                        197, 
                        239, 
                        293, 
                        353, 
                        431, 
                        521, 
                        631, 
                        761, 
                        919, 
                        1103, 
                        1327, 
                        1597, 
                        1931, 
                        2333, 
                        2801, 
                        3371, 
                        4049, 
                        4861, 
                        5839, 
                        7013, 
                        8419, 
                        10103, 
                        12143, 
                        14591, 
                        17519, 
                        21023, 
                        25229, 
                        30293, 
                        36353, 
                        43627, 
                        52361, 
                        62851, 
                        75431, 
                        90523, 
                        108631, 
                        130363, 
                        156437, 
                        187751, 
                        225307, 
                        270371, 
                        324449, 
                        389357, 
                        467237, 
                        560689, 
                        672827, 
                        807403, 
                        968897, 
                        1162687, 
                        1395263, 
                        1674319, 
                        2009191, 
                        2411033, 
                        2893249, 
                        3471899, 
                        4166287, 
                        4999559, 
                        5999471, 
                        7199369
                    ], System.Int32);
                }
            },
            methods: {
                Combine: function (h1, h2) {
                    var rol5 = (((((h1 >>> 0) << 5) >>> 0)) | ((h1 >>> 0) >>> 27)) >>> 0;
                    return ((((rol5 | 0) + h1) | 0)) ^ h2;
                },
                IsPrime: function (candidate) {
                    if ((candidate & 1) !== 0) {
                        var limit = H5.Int.clip32(Math.sqrt(candidate));
                        for (var divisor = 3; divisor <= limit; divisor = (divisor + 2) | 0) {
                            if ((candidate % divisor) === 0) {
                                return false;
                            }
                        }
                        return true;
                    }
                    return (candidate === 2);
                },
                GetPrime: function (min) {
                    if (min < 0) {
                        throw new System.ArgumentException.$ctor1("Hashtable's capacity overflowed and went negative. Check load factor, capacity and the current size of the table.");
                    }
                    for (var i = 0; i < System.Collections.HashHelpers.primes.length; i = (i + 1) | 0) {
                        var prime = System.Collections.HashHelpers.primes[System.Array.index(i, System.Collections.HashHelpers.primes)];
                        if (prime >= min) {
                            return prime;
                        }
                    }
                    for (var i1 = (min | 1); i1 < 2147483647; i1 = (i1 + 2) | 0) {
                        if (System.Collections.HashHelpers.IsPrime(i1) && ((((i1 - 1) | 0)) % System.Collections.HashHelpers.HashPrime !== 0)) {
                            return i1;
                        }
                    }
                    return min;
                },
                GetMinPrime: function () {
                    return System.Collections.HashHelpers.primes[System.Array.index(0, System.Collections.HashHelpers.primes)];
                },
                ExpandPrime: function (oldSize) {
                    var newSize = H5.Int.mul(2, oldSize);
                    if ((newSize >>> 0) > System.Collections.HashHelpers.MaxPrimeArrayLength && System.Collections.HashHelpers.MaxPrimeArrayLength > oldSize) {
                        return System.Collections.HashHelpers.MaxPrimeArrayLength;
                    }
                    return System.Collections.HashHelpers.GetPrime(newSize);
                }
            }
        }
    });
