module.exports = function reverse(n) {
   let str = n.toString();
   let str1 = '';
   for (let i = str.length; i > 0; i--) {
      str1 += str.charAt(i - 1);
   }
   str = str1.replace('-', '');
   return str;
}
