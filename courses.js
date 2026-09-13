// Har course mein: theory, code examples, output
const COURSES_DB = {

  // ============ HTML ============
  "HTML": {
    icon: "🌐", tag: "Web", level: "Beginner",
    desc: "Web ka structure — tags, forms, semantic HTML, modern best practices.",
    lessons: [
      {
        title: "Introduction to HTML",
        theory: "HTML (HyperText Markup Language) web pages ka skeleton hai. Har element tags se bana hota hai jaise <h1>, <p>, <div>.",
        code: `<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n  <p>My first page</p>\n</body>\n</html>`,
        output: "Hello World\nMy first page"
      },
      {
        title: "Headings & Paragraphs",
        theory: "HTML mein 6 heading levels hote hain (h1-h6). Paragraph ke liye <p> tag use karte hain.",
        code: `<h1>Main Title</h1>\n<h2>Subtitle</h2>\n<p>Yeh ek paragraph hai.</p>`,
        output: "Main Title (large)\nSubtitle (medium)\nYeh ek paragraph hai."
      },
      {
        title: "Links & Images",
        theory: "<a> se links banate hain, <img> se images add karte hain.",
        code: `<a href="https://google.com">Google</a>\n<img src="cat.jpg" alt="A cat">`,
        output: "Clickable 'Google' link + cat image"
      },
      {
        title: "Lists",
        theory: "Ordered (<ol>) aur unordered (<ul>) lists banate hain. Har item <li> mein hota hai.",
        code: `<ul>\n  <li>Apple</li>\n  <li>Mango</li>\n</ul>\n<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>`,
        output: "• Apple\n• Mango\n1. First\n2. Second"
      },
      {
        title: "Forms",
        theory: "User input lene ke liye forms use karte hain — text, email, password, buttons.",
        code: `<form>\n  <input type="text" placeholder="Name">\n  <input type="email" placeholder="Email">\n  <button>Submit</button>\n</form>`,
        output: "Text input + Email input + Submit button"
      },
      {
        title: "Semantic HTML",
        theory: "Semantic tags (header, nav, main, article, footer) SEO aur accessibility ke liye better hain.",
        code: `<header>Logo</header>\n<nav>Menu</nav>\n<main>\n  <article>Content</article>\n</main>\n<footer>© 2025</footer>`,
        output: "Structured page with semantic tags"
      }
    ]
  },

  // ============ CSS ============
  "CSS": {
    icon: "🎨", tag: "Web", level: "Beginner",
    desc: "Styling, layout, Flexbox, Grid, animations, responsive design.",
    lessons: [
      {
        title: "CSS Basics",
        theory: "CSS se HTML ko style karte hain — colors, fonts, spacing.",
        code: `body {\n  background: #f0f0f0;\n  color: #333;\n  font-family: Arial;\n}\nh1 {\n  color: blue;\n}`,
        output: "Grey background, dark text, blue heading"
      },
      {
        title: "Selectors",
        theory: "Class (.class), ID (#id), element (p), aur universal (*) selectors.",
        code: `.highlight { background: yellow; }\n#header { font-size: 32px; }\np { margin: 10px; }`,
        output: "Yellow highlight, 32px header, spaced paragraphs"
      },
      {
        title: "Flexbox",
        theory: "Flexbox se ek-dimensional layouts easy ho jaate hain — row ya column.",
        code: `.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n}`,
        output: "Items ek row mein evenly spaced"
      },
      {
        title: "CSS Grid",
        theory: "Grid se 2D layouts banate hain — rows aur columns dono control.",
        code: `.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}`,
        output: "3-column grid layout"
      },
      {
        title: "Animations",
        theory: "@keyframes se custom animations banao, transition se smooth changes.",
        code: `.btn {\n  transition: transform .3s;\n}\n.btn:hover {\n  transform: scale(1.1);\n}`,
        output: "Button hover par zoom hota hai"
      }
    ]
  },

  // ============ JAVASCRIPT ============
  "JavaScript": {
    icon: "⚡", tag: "Web", level: "Beginner → Pro",
    desc: "Web ko interactive banao — DOM, ES6, async, promises.",
    lessons: [
      {
        title: "Variables",
        theory: "let, const, aur var — modern JS mein let/const use karo.",
        code: `let name = "Rahul";\nconst age = 18;\nvar old = "avoid me";\nconsole.log(name, age);`,
        output: "Rahul 18"
      },
      {
        title: "Functions",
        theory: "Functions reusable code blocks hote hain. Arrow functions ES6 ka feature.",
        code: `function greet(name) {\n  return "Hello " + name;\n}\nconst hi = (n) => "Hi " + n;\nconsole.log(greet("Dev"));\nconsole.log(hi("Pro"));`,
        output: "Hello Dev\nHi Pro"
      },
      {
        title: "Arrays & Objects",
        theory: "Arrays ordered lists hain, objects key-value pairs.",
        code: `const fruits = ["apple", "banana"];\nconst user = { name: "Aman", age: 20 };\nconsole.log(fruits[0]);\nconsole.log(user.name);`,
        output: "apple\nAman"
      },
      {
        title: "DOM Manipulation",
        theory: "JavaScript se HTML elements ko select aur modify karte hain.",
        code: `const btn = document.querySelector("#btn");\nbtn.addEventListener("click", () => {\n  document.body.style.background = "black";\n});`,
        output: "Button click par background black"
      },
      {
        title: "Promises & Async",
        theory: "Async operations ke liye promises aur async/await.",
        code: `async function fetchData() {\n  const res = await fetch("/api");\n  const data = await res.json();\n  console.log(data);\n}`,
        output: "API se data fetch hota hai"
      }
    ]
  },

  // ============ PYTHON ============
  "Python": {
    icon: "🐍", tag: "Popular", level: "Beginner → Pro",
    desc: "Beginner-friendly, AI, automation, backend, data science.",
    lessons: [
      {
        title: "Hello Python",
        theory: "Python ka pehla program. print() function screen par output deta hai.",
        code: `print("Hello, Python!")`,
        output: "Hello, Python!"
      },
      {
        title: "Variables & Types",
        theory: "Python dynamically typed hai — variable ka type automatically detect hota hai.",
        code: `name = "Rahul"\nage = 18\nprice = 99.5\nis_dev = True\nprint(name, age, price, is_dev)`,
        output: "Rahul 18 99.5 True"
      },
      {
        title: "If-Else",
        theory: "Conditional logic ke liye if, elif, else use karte hain. Indentation important hai!",
        code: `marks = 75\nif marks >= 90:\n    print("A")\nelif marks >= 60:\n    print("B")\nelse:\n    print("Fail")`,
        output: "B"
      },
      {
        title: "Loops",
        theory: "for aur while loops se repetition karte hain. range() se number sequence.",
        code: `for i in range(1, 6):\n    print("Count:", i)\n\nn = 1\nwhile n <= 3:\n    print("While:", n)\n    n += 1`,
        output: "Count: 1\nCount: 2\n...\nWhile: 1\nWhile: 2\nWhile: 3"
      },
      {
        title: "Functions",
        theory: "def keyword se functions banate hain. Return value optional.",
        code: `def add(a, b):\n    return a + b\n\nprint(add(2, 3))\nprint(add(10, 20))`,
        output: "5\n30"
      },
      {
        title: "Lists & Dicts",
        theory: "Lists [] ordered hain, dicts {} key-value store karte hain.",
        code: `fruits = ["apple", "banana"]\nuser = {"name": "Aman", "age": 20}\nfruits.append("mango")\nprint(fruits)\nprint(user["name"])`,
        output: "['apple', 'banana', 'mango']\nAman"
      },
      {
        title: "Classes & OOP",
        theory: "class keyword se apni types banate hain. __init__ constructor hai.",
        code: `class Student:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    def intro(self):\n        print(f"I am {self.name}, {self.age}")\n\ns = Student("Aman", 20)\ns.intro()`,
        output: "I am Aman, 20"
      },
      {
        title: "File I/O",
        theory: "open() se files padho aur likho. with block se auto-close.",
        code: `with open("demo.txt", "w") as f:\n    f.write("Hello File")\n\nwith open("demo.txt") as f:\n    print(f.read())`,
        output: "Hello File"
      }
    ]
  },

  // ============ JAVA ============
  "Java": {
    icon: "☕", tag: "Popular", level: "Beginner → Pro",
    desc: "OOP, Android, enterprise applications. Platform-independent.",
    lessons: [
      {
        title: "Hello World",
        theory: "Java ka pehla program. Har program class ke andar hota hai.",
        code: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}`,
        output: "Hello, Java!"
      },
      {
        title: "Variables & Types",
        theory: "Java statically typed hai — type declare karna padta hai.",
        code: `int age = 18;\ndouble price = 99.5;\nString name = "Rahul";\nboolean isDev = true;\nSystem.out.println(name + " is " + age);`,
        output: "Rahul is 18"
      },
      {
        title: "Control Flow",
        theory: "if-else, switch, loops — sab Java mein supported hain.",
        code: `int day = 3;\nswitch(day) {\n    case 1: System.out.println("Mon"); break;\n    case 3: System.out.println("Wed"); break;\n    default: System.out.println("Other");\n}`,
        output: "Wed"
      },
      {
        title: "Classes & Objects",
        theory: "Java pure OOP language hai. Class blueprint, object instance.",
        code: `class Student {\n    String name;\n    int age;\n    void intro() {\n        System.out.println("I am " + name);\n    }\n}\nStudent s = new Student();\ns.name = "Aman";\ns.intro();`,
        output: "I am Aman"
      },
      {
        title: "Inheritance",
        theory: "extends keyword se ek class dusri ki properties inherit karti hai.",
        code: `class Animal {\n    void sound() { System.out.println("Sound"); }\n}\nclass Dog extends Animal {\n    void sound() { System.out.println("Bark"); }\n}\nAnimal a = new Dog();\na.sound();`,
        output: "Bark"
      },
      {
        title: "Collections",
        theory: "ArrayList, HashMap, HashSet — dynamic data structures.",
        code: `ArrayList<String> names = new ArrayList<>();\nnames.add("Ram");\nnames.add("Sita");\nfor (String n : names) System.out.println(n);`,
        output: "Ram\nSita"
      }
    ]
  },

  // ============ C ============
  "C": {
    icon: "🔵", tag: "Core", level: "Beginner → Pro",
    desc: "System programming, embedded, fundamentals. Mother of modern languages.",
    lessons: [
      {
        title: "Hello C",
        theory: "C ka pehla program. printf() se output dete hain, main() entry point.",
        code: `#include <stdio.h>\n\nint main() {\n    printf("Hello, C!\\n");\n    return 0;\n}`,
        output: "Hello, C!"
      },
      {
        title: "Variables & Types",
        theory: "int, float, double, char — C mein fixed-size types hote hain.",
        code: `int age = 18;\nfloat price = 99.5;\nchar grade = 'A';\nprintf("%d %f %c\\n", age, price, grade);`,
        output: "18 99.500000 A"
      },
      {
        title: "Control Flow",
        theory: "if-else, switch, for, while — sab classic control structures.",
        code: `int n = 5;\nfor (int i = 1; i <= n; i++) {\n    printf("%d ", i);\n}`,
        output: "1 2 3 4 5"
      },
      {
        title: "Functions",
        theory: "C mein functions separately define karte hain.",
        code: `int add(int a, int b) {\n    return a + b;\n}\nint main() {\n    printf("%d\\n", add(2, 3));\n    return 0;\n}`,
        output: "5"
      },
      {
        title: "Pointers",
        theory: "Pointer ek variable hai jo dusre variable ka address store karta hai. C ki power!",
        code: `int x = 10;\nint *p = &x;\nprintf("Value: %d\\n", *p);\n*p = 20;\nprintf("New: %d\\n", x);`,
        output: "Value: 10\nNew: 20"
      },
      {
        title: "Arrays & Strings",
        theory: "Arrays fixed-size collections hain. Strings char arrays hoti hain.",
        code: `int nums[3] = {1, 2, 3};\nfor (int i = 0; i < 3; i++) printf("%d ", nums[i]);\nchar name[] = "Dev";\nprintf("\\n%s\\n", name);`,
        output: "1 2 3\nDev"
      }
    ]
  },

  // ============ C++ ============
  "C++": {
    icon: "➕", tag: "Core", level: "Beginner → Pro",
    desc: "Games, performance, DSA. C + OOP + STL.",
    lessons: [
      {
        title: "Hello C++",
        theory: "C++ mein iostream include karte hain, cout se print.",
        code: `#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello, C++!" << endl;\n    return 0;\n}`,
        output: "Hello, C++!"
      },
      {
        title: "Classes & Objects",
        theory: "C++ mein class se apni types banate hain — C ka superset.",
        code: `class Student {\npublic:\n    string name;\n    void intro() { cout << "I am " << name; }\n};\nStudent s;\ns.name = "Aman";\ns.intro();`,
        output: "I am Aman"
      },
      {
        title: "Inheritance",
        theory: "public inheritance se child class parent ki cheezein use karti hai.",
        code: `class Animal {\npublic:\n    void sound() { cout << "Sound"; }\n};\nclass Dog : public Animal {\npublic:\n    void sound() { cout << "Bark"; }\n};`,
        output: "Bark"
      },
      {
        title: "STL Vectors",
        theory: "STL ka vector dynamic array hai — size automatically badhta hai.",
        code: `#include <vector>\nvector<int> v = {1, 2, 3};\nv.push_back(4);\nfor (int x : v) cout << x << " ";`,
        output: "1 2 3 4"
      },
      {
        title: "Templates",
        theory: "Templates se generic functions/classes banao jo kisi bhi type ke saath kaam karein.",
        code: `template <typename T>\nT add(T a, T b) { return a + b; }\ncout << add(2, 3) << endl;\ncout << add(2.5, 3.5) << endl;`,
        output: "5\n6"
      }
    ]
  }
};

// Baaki 1000+ languages ke liye generic structure
// (Real content load hoga data/languages.js se)
function generateGenericCourse(langName, category) {
  return {
    icon: "📘", tag: category, level: "Beginner",
    desc: `${langName} seekho — beginner-friendly lessons with theory, code, aur output.`,
    lessons: [
      {
        title: `Introduction to ${langName}`,
        theory: `${langName} ek ${category} language hai. Is lesson mein hum basics dekhenge.`,
        code: `// ${langName} ka basic syntax\n// Yahan aap ${langName} ka pehla program likhenge`,
        output: `${langName} program output yahan dikhega`
      },
      {
        title: `${langName} — Variables`,
        theory: `${langName} mein variables kaise declare hote hain.`,
        code: `// ${langName} variable declaration\n// syntax yahan likha jayega`,
        output: "Variable value"
      },
      {
        title: `${langName} — Loops`,
        theory: `${langName} mein loops kaise kaam karte hain.`,
        code: `// for/while loop in ${langName}`,
        output: "Loop output"
      },
      {
        title: `${langName} — Functions`,
        theory: `${langName} mein functions kaise banate hain.`,
        code: `// function definition in ${langName}`,
        output: "Function output"
      }
    ]
  };
}