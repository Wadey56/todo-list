# todo-list

# markdown cheatsheet

"#" are for heading 1-6  
line breaks are two spaces and a return  
**bold**  
_italic_

> block quote  
> write code as code with a tab indent

- unordered

* lists

1. ordered
2. lists  
   horizontal rules

---

---

[Cheatsheet Link](https://medium.com/analytics-vidhya/writing-github-readme-e593f278a796)
![alt-text](path to img)

- [] task list
- [x] ironic

# description

this repository is a project completed as part of The Odin Project's [Project: Todo List](https://www.theodinproject.com/lessons/node-path-javascript-todo-list#introduction)

## skills and techniques

in this project i will have utilised:

- npm to install the date picker
- webpack
- custom config from my own template repo
- knowledge on SOLID
- factories / classes (depending how i design)
- modules to keep code separated
- API for localStorage

## project notes

get back into the habbit of commenting on blocks of code  
deign first, code later! i will be using Figma for this approach

## reflection

as per my project notes i made a quick design on figma  
this will make producing my css much easier as i already have the visualisation

before writting any code i have spent a lot of (too much) time on point 1. of the project  
i have had to refresh myself on object constructors, factory functions and classes  
my general take aways from research were factory functions or classes are generally prefered  
i have been conflicted but settled on factory functions  
task objects will be simple objects with options to build features with composition
we're not scaling to thousands of objects (tasks) being created so performance penalty is not valid

as i write more code i am finding that testing is difficult  
since i have been used to building my other projects without webpack i could access everything in console  
webpack is hiding the variables / methods i want to access  
i can still use console.log in my index file but i do not get to see the dynamic behaviour  
there seems to be work arounds for this but none seem as intuative than previous access  
i will look more into this at the end / when this becomes a problem

my current codebase contains ways to create, delete and edit (mark complete by ext) tasks  
there is also functionality to create projects (edit and delete to come later)
i have tested these work via good old console logs on my index.js (not bullet proof, i know)  
this seems like a good stage to start making some DOM visuals  
rather than validate inputs at this stage i will force values in via forms  
once i get to this stage i will revisit direct injection and make the required changes

---

# installation

copy the SSH url  
run git clone _SSH url_ in your terminal  
cd into the directory  
run npm install in your terminal

---

# credits

[Medium Article on Writing Github README by Gaganpreet Kaur Kalsi](https://medium.com/analytics-vidhya/writing-github-readme-e593f278a796)  
before i started any code i spent some time to learn the basics of markdown.  
this will actually be my first repository with an actual readme!  
i have fallen into the bad habbit of not creating any sort of readme on previous projects.  
my goal is to create these with every relevant project and go back on my later work for future reference.
