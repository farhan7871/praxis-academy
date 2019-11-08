var hash = "#";

for (counter = 0; counter < 8; counter++) {

    console.log(hash);
    hash = hash + "#" ;
}

output
#
##
###
####
#####
######
#######
########

---------------------------------------------------------------------------------
// declare size and an empty "board" string
var size = 8;
var board = "";

// Outerloop for rows
for (let i = 1; i <= size; i++) {
  // inner loop for columns
  for (let j = 1; j <= size; j++) {
    if ((i + j) % 2 == 0) { // check if col is even
      board += " ";
    } else { // if col is odd
      board += "#";
    }
  }
  board += "\n"; // jump to next row
}
console.log(board);

output
# # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
