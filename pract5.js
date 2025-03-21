var groupAnagrams = function (str) {
    const alpha ={};
  const sortedstr = str.map((str) => str.split("").sort().join(""));
  console.log(sortedstr.sort());
  if(sortedstr[i] !== undefined) {
    alpha[sortedstr[i]] = i;
};

str = ["eat", "tea", "tan", "ate", "nat", "bat"];
groupAnagrams(str);
