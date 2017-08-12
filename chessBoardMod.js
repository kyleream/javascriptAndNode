//Prints Chess board
// By Kyle Ream
// for loop runs 8x first if checks row number for div by 2
// if yes first row of hastags are printed else other row of hashtags

for (row=1; row<=8; row+=1){
    if (row % 2 == 0){
      column(2);
    }
    else {
      column(1);
    }
  }


function column(n) {
  var hash = "#";
  var  space = " ";
  var hashTagLine = "";

   for (col=n; col<=8; col+=1) {

        if (col % 2 == 0 ){
          hashTagLine = hashTagLine + hash;
        }
        else {
          hashTagLine = hashTagLine + space;
        }
    }
    console.log(hashTagLine);
    hashTagLine = "";
 }
