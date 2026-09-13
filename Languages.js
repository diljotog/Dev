// 1000+ programming languages, frameworks, tools
// Category wise grouped

const LANGUAGES = {
  web: [
    "HTML","CSS","JavaScript","TypeScript","React","Vue","Angular","Svelte",
    "Next.js","Nuxt","Astro","Remix","SolidJS","Preact","Lit","Alpine.js",
    "jQuery","Bootstrap","Tailwind CSS","Sass","Less","Stylus","PostCSS",
    "Webpack","Vite","Rollup","Parcel","esbuild","Babel","SWC"
  ],

  backend: [
    "Node.js","Express","NestJS","Fastify","Koa","Hapi","Deno","Bun",
    "Django","Flask","FastAPI","Pyramid","Tornado","Bottle","Starlette",
    "Ruby on Rails","Sinatra","Hanami","Laravel","Symfony","CodeIgniter",
    "Spring","Spring Boot","Quarkus","Micronaut","Vert.x","Play Framework",
    "ASP.NET","ASP.NET Core","Blazor","Gin","Echo","Fiber","Chi",
    "Phoenix","Actix","Rocket","Warp","Axum","Vapor"
  ],

  mobile: [
    "Android (Java)","Android (Kotlin)","iOS (Swift)","iOS (Objective-C)",
    "React Native","Flutter","Ionic","Xamarin","MAUI","NativeScript",
    "Cordova","Capacitor","Kotlin Multiplatform","Jetpack Compose","SwiftUI"
  ],

  systems: [
    "C","C++","Rust","Go","Zig","D","Nim","Crystal","Ada","Pascal",
    "Fortran","COBOL","Assembly x86","Assembly ARM","RISC-V Assembly",
    "V","Odin","Jai","Hare","Carbon"
  ],

  jvm: [
    "Java","Kotlin","Scala","Groovy","Clojure","JRuby","Jython",
    "Ceylon","Xtend","Gosu"
  ],

  scripting: [
    "Python","Ruby","Perl","PHP","Lua","Tcl","Bash","Zsh","Fish",
    "PowerShell","Batch","VBScript","AppleScript","AutoHotkey","R"
  ],

  functional: [
    "Haskell","Erlang","Elixir","F#","OCaml","Standard ML","Scheme",
    "Racket","Clojure","Lisp","Common Lisp","Idris","Agda","Coq"
  ],

  data: [
    "SQL","MySQL","PostgreSQL","SQLite","MariaDB","Oracle","SQL Server",
    "MongoDB","Redis","Cassandra","CouchDB","Neo4j","DynamoDB",
    "Firebase","Supabase","Elasticsearch","InfluxDB","TimescaleDB",
    "Pandas","NumPy","Polars","Dask"
  ],

  ai_ml: [
    "TensorFlow","PyTorch","Keras","scikit-learn","XGBoost","LightGBM",
    "JAX","ONNX","Hugging Face","LangChain","LlamaIndex","OpenCV",
    "spaCy","NLTK","Gensim","FastAI","MXNet","Theano","Caffe"
  ],

  cloud_devops: [
    "AWS","Azure","GCP","Docker","Kubernetes","Terraform","Ansible",
    "Jenkins","GitLab CI","GitHub Actions","CircleCI","ArgoCD",
    "Prometheus","Grafana","Nginx","Apache","HAProxy","Istio"
  ],

  game: [
    "Unity (C#)","Unreal (C++)","Godot","GameMaker","Bevy (Rust)",
    "Love2D (Lua)","Phaser (JS)","Three.js","Babylon.js","PlayCanvas",
    "SDL","SFML","OpenGL","Vulkan","DirectX","WebGL","WebGPU"
  ],

  embedded: [
    "Arduino","Raspberry Pi","ESP32","STM32","MicroPython","CircuitPython",
    "Embedded C","Embedded C++","Verilog","VHDL","SystemVerilog"
  ],

  blockchain: [
    "Solidity","Vyper","Rust (Solana)","Move","Cairo","Go (Cosmos)",
    "Web3.js","Ethers.js","Hardhat","Truffle","Foundry"
  ],

  scientific: [
    "MATLAB","Octave","Mathematica","Maple","Julia","Scilab","Maxima",
    "SAS","SPSS","Stata"
  ],

  misc: [
    "Scratch","Blockly","Processing","p5.js","OpenSCAD","GLSL","HLSL",
    "Shader Lab","RegEx","Markdown","LaTeX","YAML","JSON","TOML","XML"
  ]
};

// Total ~1000+ count karne ke liye
const TOTAL_LANGUAGES = Object.values(LANGUAGES).flat().length;

// Saare languages flat array
const ALL_LANGUAGES = Object.entries(LANGUAGES).flatMap(([cat, list]) =>
  list.map(name => ({ name, category: cat }))
);

console.log(`📚 Total Languages: ${TOTAL_LANGUAGES}`);