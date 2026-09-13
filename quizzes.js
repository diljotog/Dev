const QUIZZES = {
  "HTML": [
    { q: "HTML ka full form?", opts: ["Hyper Text Markup Language","High Tech Modern Lang","Home Tool Markup","None"], ans: 0 },
    { q: "Sabse bada heading tag?", opts: ["<h6>","<h1>","<head>","<heading>"], ans: 1 },
    { q: "Link banane ke liye?", opts: ["<link>","<a>","<href>","<url>"], ans: 1 },
    { q: "Image insert karne ke liye?", opts: ["<image>","<img>","<pic>","<src>"], ans: 1 },
    { q: "List item ke liye tag?", opts: ["<li>","<ul>","<list>","<item>"], ans: 0 }
  ],
  "CSS": [
    { q: "CSS ka full form?", opts: ["Computer Style Sheets","Cascading Style Sheets","Creative Style System","None"], ans: 1 },
    { q: "Class selector ka symbol?", opts: ["#",".","@","$"], ans: 1 },
    { q: "Flexbox ka display value?", opts: ["block","flex","grid","inline"], ans: 1 },
    { q: "Hover effect ke liye?", opts: [":hover",":active",":focus",":click"], ans: 0 },
    { q: "ID selector ka symbol?", opts: [".","#","@","*"], ans: 1 }
  ],
  "JavaScript": [
    { q: "Variable declare karne ka modern tareeka?", opts: ["var","let","int","dim"], ans: 1 },
    { q: "Arrow function ka symbol?", opts: ["->","=>","<-","::"], ans: 1 },
    { q: "Array ka first element index?", opts: ["1","0","-1","a"], ans: 1 },
    { q: "DOM ka full form?", opts: ["Data Object Model","Document Object Model","Direct Object Method","None"], ans: 1 },
    { q: "Async keyword kis liye?", opts: ["Loops","Promises","Variables","Classes"], ans: 1 }
  ],
  "Python": [
    { q: "Print karne ka function?", opts: ["echo","print","console.log","printf"], ans: 1 },
    { q: "Python file ka extension?", opts: [".py",".python",".pt",".pyt"], ans: 0 },
    { q: "Comment ka symbol?", opts: ["//","#","/*","--"], ans: 1 },
    { q: "Class constructor ka naam?", opts: ["__init__","__new__","constructor","init"], ans: 0 },
    { q: "List ke liye symbol?", opts: ["{}","[]","()","<>"], ans: 1 }
  ],
  "Java": [
    { q: "Entry point method?", opts: ["main()","start()","run()","init()"], ans: 0 },
    { q: "Inheritance ka keyword?", opts: ["implements","extends","inherits","uses"], ans: 1 },
    { q: "Output ke liye?", opts: ["print()","System.out.println()","cout","echo"], ans: 1 },
    { q: "Java file ka extension?", opts: [".java",".class",".jar",".jv"], ans: 0 },
    { q: "Lambda kis version se?", opts: ["Java 6","Java 7","Java 8","Java 9"], ans: 2 }
  ],
  "C": [
    { q: "Output ke liye function?", opts: ["print()","printf()","cout","echo"], ans: 1 },
    { q: "C ka creator?", opts: ["Bjarne","Dennis Ritchie","James Gosling","Guido"], ans: 1 },
    { q: "Pointer symbol?", opts: ["*","&","@","#"], ans: 0 },
    { q: "main() return type?", opts: ["void","int","char","float"], ans: 1 },
    { q: "Header include syntax?", opts: ["#include","import","using","require"], ans: 0 }
  ],
  "C++": [
    { q: "Output ke liye?", opts: ["printf","cout","print","echo"], ans: 1 },
    { q: "C++ ka creator?", opts: ["Dennis Ritchie","Bjarne Stroustrup","James Gosling","Guido"], ans: 1 },
    { q: "STL ka dynamic array?", opts: ["array","vector","list","stack"], ans: 1 },
    { q: "Inheritance ka keyword?", opts: [":",  "extends","inherits","implements"], ans: 0 },
    { q: "Namespace ka keyword?", opts: ["namespace","package","module","import"], ans: 0 }
  ]
};

function getQuizForLang(lang) {
  return QUIZZES[lang] || [
    { q: `${lang} seekhne ke liye kaunsa best tareeka hai?`, opts: ["Practice","Sirf padhna","Skip karna","Ratta maarna"], ans: 0 }
  ];
}