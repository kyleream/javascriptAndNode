//Prints Chess board
// By Kyle Ream
// for loop runs 8x first if checks row number for div by 2
// if yes first row of hastags are printed else other row of hashtags
for (row=1; row<=8; row+=1) {
  if (i%2 == 0 ){
  console.log("# # # #");
  }
  else {
    console.log(" # # # #");
  }
}
