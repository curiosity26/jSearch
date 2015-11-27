# jSearch
Search a string, array or object for another string array or object (deep nesting)

## Search for a String
```JavaScript
var searchTarget = "My name is Bob";
var searchQuery = "Bob";

jSearch(searchTarget, searchQuery); // Returns true
```

```JavaScript
var searchTarget = {
    author: {
        name: "Bob"
    }
};
var searchQuery = "Bob";

jSearch(searchTarget, searchQuery); // Returns true
```


```JavaScript
var searchTarget = [
    {
        author: {
            name: "Bob"
        }
    },
    {
        author: {
            name: "Larry"
        }
    }
];
var searchQuery = "Bob";

jSearch(searchTarget, searchQuery); // Returns searchTarget[0]
```

## Search for Array

```JavaScript
var searchTarget = ["Bob", "Larry", "Julia"];
var searchQuery = ["Bob", "Larry", "Julia"];

jSearch(searchTarget, searchQuery); // Returns searchTarget

searchTarget = ["Bob", "Larry", "Julia", "Mona"];
jSearch(searchTarget, searchQuery); // Returns false
```

```JavaScript
var searchTarget = {
    authors: ["Bob", "Larry", "Julia"],
    };
var searchQuery = ["Bob", "Larry", "Julia"];

jSearch(searchTarget, searchQuery); // Returns searchTarget
```

```JavaScript
var searchTarget = [
    {
        authors: ["Bob", "Larry", "Julia"],
    },
    {
        authors: ["Bob", "Larry", "Julia", "Mona"],
    }
];
var searchQuery = ["Bob", "Larry", "Julia"];

jSearch(searchTarget, searchQuery); // Returns searchTarget[0]
```

## Search for Object

```JavaScript
var searchTarget = {
    author: "Bob Jones",
    friends: ["Bob", "Larry", "Julia"]
};
var searchQuery = {
  author: "Bob Jones",
  friends: ["Bob", "Larry", "Julia"]
};

jSearch(searchTarget, searchQuery); // Returns searchTarget
```

```JavaScript
var searchTarget = [
    {
        author: "Bob Jones",
        friends: ["Mona", "Larry", "Julia"]
    },
    {
        author: "Larry Jones",
        friends: ["Bob", "Mona", "Julia"]
    },
    {
        author: "Bob Jones",
        friends: ["Bob", "Larry", "Julia"]
    }
];
var searchQuery = {
  author: "Bob Jones",
  friends: ["Mona", "Larry", "Julia"]
};

jSearch(searchTarget, searchQuery); // Returns searchTarget[0]
```

```JavaScript
var searchTarget = [
    {
        author: "Bob Jones",
        friends: ["Mona", "Larry", "Julia"]
    },
    {
        author: "Larry Jones",
        workedWith: [
            {
                author: "Bob Jones",
                friends: ["Mona", "Larry", "Julia"]
            },
            {
                author: "Mona the Monster",
                friends: ["Bob", "Larry", "Julia"]
            }
        ]
    },
    {
        author: "Mona the Monster",
        workedWith: [
            {
                author: "Julia Childs",
                friends: ["Mona", "Larry", "Bob"]
            },
            {
                author: "Larry Jones",
                friends: ["Bob", "Mona", "Julia"]
            }
        ]
    }
];

var searchQuery = {
  author: "Bob Jones",
  friends: ["Mona", "Larry", "Julia"]
};

jSearch(searchTarget, searchQuery); // Returns searchTarget[0] and searchTarget[1] as an array
```

## Use with Node.js

```JavaScript
var jSearch = require("jsearch");

jSearch(object, query);
```

## Use in a web browser

```HTML
<script src="dist/jSearch.min.js"></script>

<script type="text/javascript">
    // ... My application code
    
    jSearch(object, query);
    
    // ... More application code
</script>
```