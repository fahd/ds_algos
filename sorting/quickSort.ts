/*
  Split items that are less than pivot on one side of the array
  Then pivot
  Then items that are larger than pivot
  
             [ 0... 16...31 ]
           /                  \
        [0...8...15]          [17...24...31]
          /     \               /       \
       [0 - 6]  [ 9 - 15]   [17 - 23]   [25 - 31]
    ...etc
      [0,0]           [15,15] 
      ^ we'll have arrays of length 1 sorted


    16 is sorted because it's an array of length 1
  
 O (n log n)
 scan N times, do a log n amount of times
*/