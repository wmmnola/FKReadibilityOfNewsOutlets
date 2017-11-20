function fk_number(s){
  let syllablecount = 0;
  let score, wordcount, sentancecount = 0;
  let w1 = 206.835;
  let w2 = -1.015;
  let w3 = -84.6;
  s_list = s.split(" ");

  let sentances = s.split(/[.,!?;:]/);
  console.log(sentances)
  sentancecount = sentances.length;
  wordcount = s_list.length;
  for(let w of s_list){
    syllablecount += new_count(w);
  }
  console.log("Syllables" + syllablecount);
  console.log("clause count: "+sentancecount);
  console.log("wordcount: "+wordcount)
  score = w1 + w2 * (wordcount/sentancecount) + w3 * (syllablecount/wordcount);
  return score
}



function new_count(word) {
  word = word.toLowerCase();                                     //word.downcase!
  if(word.length <= 3) { return 1; }                             //return 1 if word.length <= 3
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
    word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
    return word.match(/[aeiouy]{1,2}/g).length;                    //word.scan(/[aeiouy]{1,2}/).size
}
