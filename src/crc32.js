export const crc32 = str => {
  var c;
  var crc32Table =[];
  for(var n =0; n < 256; n++){
        c = n;
        for(var k =0; k < 8; k++){
            if(c&1)
            {
              c= (0xEDB88320 ^ (c >>> 1));
            }else{
                  c= (c>>>1);
            };
        }
        crc32Table[n] = c;
    }
  
  var crcTable = window.crcTable || (window.crcTable = makeCRC32Table());
    var crc = 0 ^ (-1);
     for (var i = 0; i < str.length; i++ ) {
        crc = (crc >>> 8) ^ crcTable[(crc ^ str.charCodeAt(i)) & 0xFF];
    }
     return (crc ^ (-1)) >>> 0;
};
