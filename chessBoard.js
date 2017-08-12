//Prints Chess board
// By Kyle Ream
// for loop runs 8x first if checks row number for div by 2
// if yes first row of hastags are printed else other row of hashtags
for (row=1; row<=8; row+=1) {
  var hash = "#";
  var  space = " ";
  var hashTagLine = "";

     if (row % 2 == 0 ){
       hashTagLine = hashTagLine + hash;
       hashTagLine = hashTagLine + Space;
      }

      else {
        hashTagLine = hashTagLine + Space;
        hashTagLine = hashTagLine + hash;
        }
    console.log(hashTagLine);    
}
